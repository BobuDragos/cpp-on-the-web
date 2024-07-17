const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/run-cpp', (req, res) => {
    exec(path.join(__dirname, 'script'), (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`Script stderr: ${stderr}`);
            return res.status(500).send(`Error: ${stderr}`);
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

