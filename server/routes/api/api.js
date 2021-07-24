const express = require('express');
const passport = require('../../passport');

const router = express.Router();

router.get('/', passport.protected, (req, res) => {
  res.json({ type: 'api', status: `${req.isAuthenticated()}` });
});

module.exports = router;
