const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  const entry = {
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    submittedAt: new Date().toISOString(),
  };

  let submissions = [];
  if (fs.existsSync(SUBMISSIONS_FILE)) {
    try {
      submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
    } catch {
      submissions = [];
    }
  }
  submissions.push(entry);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

  res.send(`
    <h1>Thanks, ${escapeHtml(entry.name)}!</h1>
    <p>Your message has been received.</p>
    <a href="/">Back to form</a>
  `);
});

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

app.listen(PORT, () => {
  console.log(`Contact form running at http://localhost:${PORT}`);
});
