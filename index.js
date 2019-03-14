const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

//allows Heroku to determine port or use 5000 when in development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT); 