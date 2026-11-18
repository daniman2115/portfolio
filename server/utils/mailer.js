
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate environment variables
 */
const validateMailerConfig = () => {
  const required = ["EMAIL_USER", "EMAIL_PASS"];
  const missing = required.filter((k) => !process.env[k]);

  if (missing.length) {
    throw new Error(`❌ Missing env vars: ${missing.join(", ")}`);
  }

  const emailUser = (process.env.EMAIL_USER || "").trim();

  if (!emailRegex.test(emailUser)) {
    throw new Error(`❌ Invalid EMAIL_USER: "${process.env.EMAIL_USER}"`);
  }
};

/**
 * Create transporter (works both locally & cloud)
 */
const getTransporter = () => {
  validateMailerConfig();

  const host = process.env.EMAIL_HOST || "smtp.gmail.com";

  // Default to 587 for cloud reliability
  const port = parseInt(process.env.EMAIL_PORT, 10) || 587;
  const secure = port === 465;

  const user = (process.env.EMAIL_USER || "").trim();
  const pass = (process.env.EMAIL_PASS || "").replace(/\s+/g, "");

  return nodemailer.createTransport({
    host,
    port,
    secure, // true only for 465
    auth: {
      user,
      pass,
    },
    tls: {
      // Only disable in cloud if needed
      rejectUnauthorized: false,
    },
  });
};

/**
 * Send Email
 */
export const sendEmail = async (
  from,
  to,
  subject,
  html,
  options = {}
) => {
  const recipient = (to || "").trim();

  if (!recipient || !emailRegex.test(recipient)) {
    throw new Error(`❌ Invalid recipient email: "${to}"`);
  }

  const transporter = getTransporter();

  // 🔍 Verify connection
  try {
    await transporter.verify();
  } catch (err) {
    console.error("❌ SMTP VERIFY ERROR:");
    console.error("Code:", err.code);
    console.error("Message:", err.message);
    console.error("Response:", err.response);
    throw err;
  }

  // 📤 Send email
  try {
    const info = await transporter.sendMail({
      from: (from || process.env.EMAIL_USER).trim(),
      to: recipient,
      subject,
      html,
      ...options,
    });

    return info;
  } catch (err) {
    console.error("❌ SEND ERROR:");
    console.error("Code:", err.code);
    console.error("Message:", err.message);
    console.error("Response:", err.response);
    throw err;
  }
};