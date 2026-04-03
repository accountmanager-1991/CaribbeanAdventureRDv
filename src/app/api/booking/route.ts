import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, date, guests, activity, message } = body;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0077b6; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 20px;">🌴 New Booking Request</h1>
          <p style="margin: 5px 0 0; opacity: 0.8;">Caribbean Adventure RD</p>
        </div>
        <div style="background: #f9f9f9; padding: 20px; border: 1px solid #e5e5e5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold; width: 140px;">👤 Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">📧 Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">📞 Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">📅 Date</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">👥 Guests</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${guests}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">🎯 Activity</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${activity}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px; font-weight: bold;">💬 Message</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
            ` : ""}
          </table>
        </div>
        <div style="padding: 15px; text-align: center; color: #666; font-size: 12px;">
          Sent from caribbeanadventurerd.com
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Caribbean Adventure RD <onboarding@resend.dev>",
      to: "juniormarte67@gmail.com",
      subject: `🌴 New Booking: ${activity} - ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
