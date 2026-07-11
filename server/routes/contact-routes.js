// routes/contactRoutes.js
import express from 'express';
import { submitContactForm } from '../services/email-service.js';

const router = express.Router();

router.post('/', submitContactForm);

export default router;
