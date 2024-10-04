const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the weather app
app.get('/weather-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Make sure your HTML file is here
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/weather-app`);
});
