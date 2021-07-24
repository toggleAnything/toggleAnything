const saml = require('passport-saml');
const R = require('ramda');
const { Organization } = require('../../mongoose/schema');

const getSamlConfig = (req, done) => {
  const org = 'onelogin' || req.body.email; // Need to Split Organization Id from Email
  const path = '/auth/sso/callback';
  Organization.findOne({ org }).then((res) => {
    const config = R.pickAll(['entryPoint', 'protocol', 'issuer', 'cert'], res);
    return done(null, { path, ...config });
  });
};

const options = {
  passReqToCallback: true,
  getSamlOptions: (req, done) => { getSamlConfig(req, done); },
};

const strategy = new saml.MultiSamlStrategy(options, (req, user, done) => done(null, user));

module.exports = strategy;
