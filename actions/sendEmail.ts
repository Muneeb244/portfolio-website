"use server";

import nodemailer from 'nodemailer';
import { validateString, getErrorMessage } from "@/lib/utils";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await transporter.sendMail({
      from: "senderEmail",
      to: "muneeb509888@gmail.com",
      subject: "New Message from Portfolio Contact Form",
      text: `From: ${senderEmail}\n\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>From:</strong> ${senderEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return {
      success: true
    };
    
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
