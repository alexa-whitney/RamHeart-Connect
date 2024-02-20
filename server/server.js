const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Port number needs to be different from the React app's port

app.use(cors());
app.use(bodyParser.json());

app.post('/stories', (req, res) => {
	// Logging the received story to the console
  console.log('Received story:', req.body);
  res.status(201).send('Story submitted successfully');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});