import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { name, email, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    console.log('Email configuration:', {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 