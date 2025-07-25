import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, message,subject,name } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "7rajkumarsoren@gmail.com",
      replyTo: email,
      subject: "${subject}",
      html: `<h2>New Message Via Contact Form</h2>
             <p><strong>From:</strong> ${email}</p>
             <p><strong>Name:</strong> ${name}</p>
             <h3><strong>Message:</strong></h3>
             <p>${message}</p>`,
    });
    if (error) {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
