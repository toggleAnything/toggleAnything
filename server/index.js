const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');

const passport = require('./passport');
const { logger } = require('./lib/winston');

const routes = require('./routes');

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(session({ secret: 'ToggleAnything', resave: false, saveUninitialized: true }));

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

routes(app);

app.get('*', (req, res) => {
  res.render('index');
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`==> 🌎 Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
  }
});
