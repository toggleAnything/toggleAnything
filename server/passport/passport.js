const passport = require('passport');
const strategy = require('./strategies');


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(strategy());

passport.protected = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/auth/sso');
  }
};

module.exports = passport;
