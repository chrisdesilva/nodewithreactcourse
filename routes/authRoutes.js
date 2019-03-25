const passport = require('passport');

//setup google oauth route. 'google' is predefined from googlestrategy. scope asks user to grant access to their profile and email address.
module.exports = (app) => {
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //handle callback by pulling code from url using google strategy
  app.get('/auth/google/callback', passport.authenticate('google'))
};