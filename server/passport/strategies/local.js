const passport = require('passport');

const defaultUser = {
  body: {
    displayName: 'Hari Bala Chandru',
    userPrincipalName: 'haribalachandru1999@gmail.com',
  },
};

class LocalStrategy extends passport.Strategy {
  constructor(options, verify) {
    super();
    this.name = 'local';
    this.passportAuthentication = options.Authentication || true;
    this.user = defaultUser;
    this.verify = verify;
  }

  authenticate() {
    const { passportAuthentication, user, verify, fail, success } = this;
    if (passportAuthentication) {
      verify(null, user, (err, resident) => {
        if (err) {
          fail(err);
        } else {
          success(resident);
        }
      });
    } else {
      fail('Unauthorized');
    }
  }
}

module.exports = new LocalStrategy({}, (req, user, done) => done(null, user));
