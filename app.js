const express = require('express');
const qrcode = require('qrcode');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/generateQR', (req, res) => {
    const text = req.query.text;

    if (!text) {
        return res.status(400).json({ error: 'Text is required.' });
    }

    qrcode.toDataURL(text, (err, url) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to generate QR code.' });
        }
        res.send(url);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
