const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure transporter (use your own email and app password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'saperkar1862004@gmail.com', // replace with your email
      pass: 'byxa spoa zdaa kbfs'     // use an app password
    }
  });

  const mailOptions = {
    from: email,
    to: 'saperkar1862004@gmail.com', // your receiving email
    subject: `Portfolio Contact: ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

