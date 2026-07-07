import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // TODO: wire this up to an email provider (Resend, SendGrid, Nodemailer, etc.)
    // For now this just logs the submission server-side.
    console.log("New contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}
