const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/run-cpp', async (req, res) => {
    try {
        const { code } = req.body;
        // Example Docker endpoint assuming Docker is running locally
        const dockerEndpoint = 'http://localhost:3001/run-cpp';
        const response = await axios.post(dockerEndpoint, { code });
        res.send(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

