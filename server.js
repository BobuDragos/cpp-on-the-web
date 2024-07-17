const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/run-cpp', (req, res) => {
    exec('./main', (error, stdout, stderr) => {
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

