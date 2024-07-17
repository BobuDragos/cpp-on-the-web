const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from the origin where your frontend is hosted (replace with your GitHub Pages URL)
const corsOptions = {
    origin: 'https://bobudragos.github.io',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/run-cpp', async (req, res) => {
    try {
        const { code } = req.body;
        const dockerEndpoint = 'http://localhost:3001/run-cpp'; // This should point to your local Docker container endpoint
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

