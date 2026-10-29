const express = require('express');
const path = require('path');
const cv = require('./data/cv.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Keep using the existing CSS and photo folders to preserve the design.
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/photo', express.static(path.join(__dirname, 'photo')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.render('cv', { cv });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CV app is running on port ${PORT}`);
});
