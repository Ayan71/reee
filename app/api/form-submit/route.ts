import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // JOB APPLICATION
    if (body.type === "job") {
      await transporter.sendMail({
        from: `"${body.name}" `,
        to: "codentrixa.services@gmail.com",
        replyTo: body.email,
        subject: `New Job Application - ${body.position}`,
        html: `
          <h2>New Job Application</h2>

          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Position:</strong> ${body.position}</p>
          <p><strong>Experience:</strong> ${body.experience}</p>
          <p><strong>Portfolio:</strong> ${body.portfolio}</p>
          <p><strong>Resume:</strong> ${body.resumeName}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
      });
    }

    // BUSINESS INQUIRY
    if (body.type === "inquiry") {
      await transporter.sendMail({
        from: `"${body.name}"`,
        to: "codentrixa.services@gmail.com",
        replyTo: body.email,
        subject: `New Business Inquiry - ${body.service}`,
        html: `
          <h2>New Business Inquiry</h2>

          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Budget:</strong> ${body.budget}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
