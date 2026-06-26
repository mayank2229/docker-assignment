const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Flask backend URL (using Docker network service name)
const FLASK_BACKEND_URL = process.env.FLASK_URL || 'http://backend:5000';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Home route - show form
app.get('/', (req, res) => {
    res.render('index', { result: null, error: null });
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const response = await axios.post(`${FLASK_BACKEND_URL}/submit`, {
            name,
            email,
            message
        });

        res.render('index', { result: response.data, error: null });
    } catch (error) {
        console.error('Error connecting to Flask backend:', error.message);
        res.render('index', { result: null, error: 'Could not connect to backend. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
