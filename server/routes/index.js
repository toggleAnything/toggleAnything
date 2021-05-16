const health = require('./health');

module.exports = (app) => {
  app.use('/health', health);
};
