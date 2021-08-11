const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const connectionUri = 'mongodb://localhost/stackoverflow';

const connectionOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_SAFE_INTEGER,
  useNewUrlParser: true,
};

const db = mongoose.connection;
db.on('connected', () => console.info('Connected'));
db.once('open', () => console.info('Connection open'));
db.on('disconnected', () => console.warn('Disconnected'));
db.on('reconnected', () => console.info('Reconnected'));
db.on('error', (error) => console.error(`${error.stack}`));

async function retryStrategy() {
  try {
    console.info(`connectionUri: ${connectionUri}`);
    await mongoose.connect(connectionUri, connectionOptions);
  } catch (e) {
    console.error(`${e.stack}`);
    setTimeout(retryStrategy, 1000);
  }
}

retryStrategy();
