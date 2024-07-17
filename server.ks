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
            console.error();
            return res.status(500).send();
        }
        if (stderr) {
            console.error();
            return res.status(500).send();
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log();
});

