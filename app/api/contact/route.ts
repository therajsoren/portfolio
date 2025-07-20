import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, message,subject,name } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "7rajkumarsoren@gmail.com",
      subject: "${subject}",
      html: `<p>You have a new message from your website contact form:</p>
             <p><strong>From:</strong> ${email}</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Message:</strong></p>
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
