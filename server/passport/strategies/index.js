const localStrategy = require('./local');
const multiSamlStrategy = require('./multisaml')

module.exports = () => {
  switch('local') {
    case 'local': {
      return localStrategy;
    }
    case 'multi-saml': {
      return multiSamlStrategy;
    }
    default: {
      return localStrategy;
    }
  }
};