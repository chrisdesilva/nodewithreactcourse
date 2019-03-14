const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//allows Heroku to determine port or use 5000 when in development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT); 