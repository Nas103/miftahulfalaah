import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/content";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, address, course, message } = await req.json();

    if (!fullName || !email || !phone || !course) {
      return NextResponse.json(
        { error: "Full name, email, phone, and course are required" },
        { status: 400 }
      );
    }

    const toEmail = siteConfig.emails.admissions;

    if (resend) {
      const html = `
        <h2>New Enrollment Request</h2>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Full name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
      `;

      const { data, error } = await resend.emails.send({
        from:
          process.env.RESEND_FROM ||
          `${siteConfig.name} <onboarding@resend.dev>`,
        to: [toEmail],
        replyTo: email,
        subject: `Enrollment: ${course} - ${fullName}`,
        html,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: error.message || "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, id: data?.id });
    }

    // No RESEND_API_KEY: log and return success (for local dev)
    console.log("Enrollment (no RESEND_API_KEY):", {
      course,
      fullName,
      email,
      phone,
      address,
      message,
      to: toEmail,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enroll API error:", error);
    return NextResponse.json(
      { error: "Failed to submit enrollment" },
      { status: 500 }
    );
  }
}
