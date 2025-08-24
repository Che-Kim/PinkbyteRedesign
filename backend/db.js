// Simple in-memory storage for contact messages
const contactMessages = [];

// Add a new contact message
const addMessage = (message) => {
  const newMessage = {
    id: Date.now(),
    ...message,
    timestamp: new Date().toISOString()
  };
  contactMessages.push(newMessage);
  return newMessage;
};

// Get all contact messages
const getMessages = () => {
  return [...contactMessages];
};

module.exports = { addMessage, getMessages };
