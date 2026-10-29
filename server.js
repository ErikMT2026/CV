
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/photo', express.static(path.join(__dirname, 'photo')));

app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.js'));
});

app.get('/', (req, res) => {
    const cv = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, 'data', 'cv.json'),
            'utf8'
        )
    );

    res.render('cv', { cv: cv });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
