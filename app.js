const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const options = { root: __dirname };

app.get('/', (req, res) => res.sendFile('./index.html', options));

app.get('/about', (req, res) => res.sendFile('./about.html', options));

app.get('/contact-me', (req, res) =>
  res.sendFile('./contact-me.html', options),
);

app.get('*', (req, res) => res.status(404).sendFile('./404.html', options));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
