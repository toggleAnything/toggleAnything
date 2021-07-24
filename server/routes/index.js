const api = require('./api');
const auth = require('./auth');
const health = require('./health');

module.exports = (app) => {
  app.use('/api', api);
  app.use('/auth', auth);
  app.use('/health', health);
};
