"use server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

/**
 * Submits the contact form to contact@yaminedaroueche.com using Nodemailer
*/
export async function submitContactForm(previousFormState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  let response = { result: "", error: "" };

  // add delay of 1s
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
    response.result = "success";
  } catch (error) {
    console.error("Error while sending the message:", error);
    response.result = "error";
    response.error = error;
  } finally {
    return { name, email, message, response };
  }
}

export async function getBaseUrl() {
  const headersList = await headers();
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const host = headersList.get('host');
  return `${protocol}://${host}`;
}

export async function getFullUrl(pathname) {
  const headersList = await headers();
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const host = headersList.get('host');
  return `${protocol}://${host}${pathname}`;
}