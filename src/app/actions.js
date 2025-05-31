"use server";
import nodemailer from "nodemailer";

export async function submitContactForm(previousFormState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  let response;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const transporter = nodemailer.createTransport({
    host: "premium251.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  await transporter.verify();
  console.log("Transporter created, server ready to take messages");

  try {
    const sentMessageInfo = await transporter.sendMail({
      from: '"Contact form (yaminedaroueche.com)" <contact@yaminedaroueche.com>',
      to: "contact@yaminedaroueche.com",
      subject: `Message from ${name} (${email})`,
      text: message,
    });

    console.log("Message sent:", sentMessageInfo.messageId);
    response = (
      <div className="mt-4 w-full text-center text-success bg-success-content border border-success rounded-md">
        Message sent successfully!
      </div>
    );
  } catch (error) {
    console.error("Error while sending the message:", error);
    response = (
      <div className="mt-4 w-full text-center text-error bg-error-content border border-error rounded-md">
        Error while sending the message: {error}
      </div>
    );
  } finally {
    return { name, email, message, response };
  }
}