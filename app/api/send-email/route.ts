import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Option 2: Using Resend API Route
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use your verified domain
      to: ["rishul02.work@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      reply_to: email,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
