const express = require('express');
const router = express.Router();
const { addMessage } = require('../db');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Name, email, and message are required' 
      });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address' 
      });
    }
    
    // Add message to in-memory storage
    const newMessage = addMessage({ name, email, message });
    
    res.status(201).json({ 
      message: 'Message sent successfully!',
      id: newMessage.id 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

module.exports = router;
