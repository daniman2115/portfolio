import Joi from "joi";
import { sendContactEmail } from "../services/email-service.js";

const contactSchema = Joi.object({
  name: Joi.string().required().trim(),
  email: Joi.string().required().email().trim(),
  subject: Joi.string().trim().max(50).allow(""),
  message: Joi.string().required().trim().max(2000),
});

export const submitContactForm = async (req, res) => {
  try {
    // Validate
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        details: error.details.map((d) => d.message),
      });
    }

    await sendContactEmail(value);

    res.status(200).json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. I will get back to you soon.",
    });
  } catch (err) {
    console.error("Contact form error:", err.message);

    let userMessage =
      "Sorry, there was an error sending your message. Please try again later.";

    if (err.message.includes("Missing required environment variables")) {
      userMessage = "Server configuration error. Please contact the administrator.";
    } else if (err.message.includes("Invalid email")) {
      userMessage = "Invalid email configuration. Please contact the administrator.";
    }

    res.status(500).json({
      success: false,
      message: userMessage,
    });
  }
};
