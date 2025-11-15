








/* eslint-env node */




const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all routes (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all React routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

