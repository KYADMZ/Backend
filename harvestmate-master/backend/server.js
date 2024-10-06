const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Serve React app for all routes except /api
app.get('/api/data', (req, res) => {
    const data = [
        { harvest: 'harvest is under development!' },
        { description: 'Harvest is an application made for farmers who want to know about the impact of climate on their farms' },
        { exit: 'Look forward to it!' }
    ];
    res.json(data);
});

// Catch-all to serve React app for other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
