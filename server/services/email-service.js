import dotenv from "dotenv";
import { emailTemplate } from "../utils/commentTemplate.js";
import { sendEmail } from "../utils/mailer.js";

dotenv.config();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sends the contact form email to the site owner.
 * @param {{ name: string, email: string, subject: string, message: string }} data
 */
export const sendContactEmail = async ({ name, email, subject, message }) => {
  if (!emailRegex.test(process.env.TO_EMAIL)) {
    throw new Error("Contact email configuration is invalid.");
  }

  const html = emailTemplate(name, email, subject, message);

  await sendEmail(
    process.env.EMAIL_FROM,   // verified sender
    process.env.TO_EMAIL,     // your inbox
    `📧 New Contact: ${subject || "(no subject)"} — ${name}`,
    html,
    { replyTo: email }        // reply goes back to the visitor
  );
};
