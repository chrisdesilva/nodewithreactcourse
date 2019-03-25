const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');


const app = express();

//pass app into arrow function from authRoutes
require('./routes/authRoutes')(app);

//allows Heroku to determine port or use 5000 when in development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT); 