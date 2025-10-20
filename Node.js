const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/proxy', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await fetch(url);
        const body = await response.text();
        res.send(body);
    } catch (err) {
        res.status(500).send('Error fetching the URL.');
    }
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
