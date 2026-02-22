import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: "Name, email, and subject are required" },
        { status: 400 }
      );
    }

    // Store in DB or send email via Resend/SendGrid etc.
    // await db.contactSubmissions.create({ name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
