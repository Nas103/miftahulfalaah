import { NextRequest, NextResponse } from "next/server";

async function getOpenAIGuidance(
  systemPrompt: string,
  userPrompt: string
): Promise<string | null> {
  if (!process.env.OPENAI_API_KEY) return null;
  try {
    const { default: OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 300,
    });
    return completion.choices[0]?.message?.content ?? null;
  } catch (err) {
    console.error("OpenAI error:", err);
    return null;
  }
}

async function getWatsonxGuidance(prompt: string): Promise<string | null> {
  const apiKey = process.env.WATSONX_AI_APIKEY;
  const projectId = process.env.WATSONX_PROJECT_ID;

  if (!apiKey || !projectId) return null;

  try {
    const { WatsonXAI } = await import("@ibm-cloud/watsonx-ai");
    const watsonx = WatsonXAI.newInstance({
      version: "2024-05-31",
      serviceUrl: process.env.WATSONX_SERVICE_URL || "https://us-south.ml.cloud.ibm.com",
    });
    const res = await watsonx.generateText({
      input: prompt,
      modelId: "ibm/granite-13b-instruct-v2",
      projectId,
      parameters: { max_new_tokens: 300 },
    });
    return (res as { result?: { results?: { generated_text?: string }[] } }).result?.results?.[0]?.generated_text ?? null;
  } catch (err) {
    console.error("Watsonx error:", err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: "Name, email, and subject are required" },
        { status: 400 }
      );
    }

    let response = `JazakAllah for your inquiry, ${name}. Our scholars at Darul Iftaa will review and respond to "${subject}" Insha Allah.`;

    const userPrompt = `Subject: ${subject}\n\nQuestion: ${message || "(No details provided)"}`;
    const systemPrompt =
      "You are a helpful assistant for an Islamic Darul Iftaa. Provide brief, respectful preliminary guidance. Always defer to qualified scholars for final rulings. Be concise and cite sources if relevant.";

    if (message) {
      const openaiResponse = await getOpenAIGuidance(systemPrompt, userPrompt);
      if (openaiResponse) {
        response = openaiResponse;
      } else {
        const fullPrompt = `${systemPrompt}\n\n${userPrompt}`;
        const watsonxResponse = await getWatsonxGuidance(fullPrompt);
        if (watsonxResponse) response = watsonxResponse;
      }
    }

    return NextResponse.json({ response, success: true });
  } catch (error) {
    console.error("Ask Fatwa API error:", error);
    return NextResponse.json(
      { error: "Failed to process your inquiry" },
      { status: 500 }
    );
  }
}
