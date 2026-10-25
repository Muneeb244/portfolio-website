"use server";

import nodemailer from "nodemailer";
import { validateString } from "@/lib/utils";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const normalizedEmail = senderEmail.trim();
  const normalizedMessage = message.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return { error: "Invalid sender email" };
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Email delivery is not configured: missing SMTP credentials.");
    return {
      error: "Email is not configured yet. Please contact me directly by email.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to: "muneeb509888@gmail.com",
      replyTo: normalizedEmail,
      subject: "New Message from Portfolio Contact Form",
      text: `From: ${normalizedEmail}\n\nMessage: ${normalizedMessage}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>From:</strong> ${escapeHtml(normalizedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(normalizedMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email delivery failed.", error);
    return {
      error: "The message could not be sent. Please try again later.",
    };
  }
};
