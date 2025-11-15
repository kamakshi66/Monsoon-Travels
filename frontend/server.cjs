
/* eslint-env node */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from the Vite build folder
app.use(express.static(path.join(__dirname, 'dist')));

// React Router support: catch-all route for unknown URLs
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

