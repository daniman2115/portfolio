import Joi from 'joi';
import { emailTemplate } from '../utils/commentTemplate.js';
import dotenv from 'dotenv';
import { sendEmail } from '../utils/mailer.js';

dotenv.config();

const contactSchema = Joi.object({
  name: Joi.string().required().trim(),
  email: Joi.string().required().email().trim(),
  subject: Joi.string().trim().max(50).allow(''),
  message: Joi.string().required().trim().max(2000)
});

export const submitContactForm = async (req, res) => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: 'Validation error',
        details: error.details.map(detail => detail.message)
      });
    }

    const { name, email, subject, message } = value;



    const html = emailTemplate(name, email, subject, message);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(process.env.TO_EMAIL)) {
      return res.status(500).json({
        success: false,
        message: "Contact email configuration is invalid."
      });
    }


    await sendEmail(
      email,  // ✅ your verified sender
      process.env.TO_EMAIL,    // ✅ system inbox
      `📧 New Contact: ${subject} - ${name}`,
      html,
      {
        replyTo: email         // ✅ user email goes here
      }
    );

    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
    });

  } catch (error) {
    console.error("FULL ERROR:", error);
    let userMessage = 'Sorry, we encountered an error while sending your message. Please try again later.';

    if (error.message.includes('Missing required environment variables')) {
      userMessage = 'Server configuration error. Please contact the administrator.';
    } else if (error.message.includes('Invalid email')) {
      userMessage = 'Invalid email configuration. Please contact the administrator.';
    }

    res.status(500).json({
      success: false,
      message: userMessage,
      error: error.message
    });
  }
};
