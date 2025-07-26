// server.js
// A simple Node.js and Express backend for the portfolio contact form.

import express from 'express';
import cors from 'cors';

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3002;

// --- Middleware ---

// Enable Cross-Origin Resource Sharing (CORS) so the frontend
// (running on a different port/domain) can communicate with this server.
app.use(cors());

// Enable the Express app to parse JSON-formatted request bodies.
app.use(express.json());

// --- API Endpoints ---

// POST /api/contact - The endpoint for the contact form
app.post('/api/contact', (req, res) => {
  // Extract the data from the request body
  const { name, email, message } = req.body;

  // --- Basic Validation ---
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // --- Process the Form Data ---
  // In a real-world application, this is where you would integrate
  // with an external email API like Nodemailer, SendGrid, or Resend
  // to send an actual email.
  // For this project, we will simply log the message to the console
  // to demonstrate that the backend has successfully received the data.
  
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('-----------------------------------');

  // Send a success response back to the frontend
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

/*
--- package.json for this server ---
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "description": "Backend for the Next.js portfolio website",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}
*/

