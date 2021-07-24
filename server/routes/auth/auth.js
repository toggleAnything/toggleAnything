const express = require('express');
const passport = require('../../passport');

const router = express.Router();
const options = {
  successRedirect: '/api',
  failureRedirect: '/auth/sso',
  failureFlash: true,
};

router.post('/sso/callback',  passport.authenticate('local', options));

router.post('/sso', passport.authenticate('local', options));
router.get('/sso', passport.authenticate('local', options));

router.get('/logout', (req, res) => {
  req.logout();
});

module.exports = router;
