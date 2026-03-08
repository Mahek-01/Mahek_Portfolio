require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://Mahek:mahek123@cluster0.vprpyqo.mongodb.net/portfolio';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas successfully'))
    .catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

// Routes
// Test Route
app.get('/api', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

// Submit Contact Form
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create new contact entry
        const newContact = new Contact({
            name,
            email,
            message
        });

        // Save to MongoDB
        const savedContact = await newContact.save();
        
        console.log('New contact saved:', savedContact);
        res.status(201).json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ success: false, error: 'Failed to send message.' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
