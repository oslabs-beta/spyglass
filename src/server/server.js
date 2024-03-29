import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
const app = express();
const PORT = 3333;

// import config file and then configure passport
import { passportConfig } from './config/passport.js';
passportConfig(passport);

// ********** Import Routers ********** //
import { authRouter } from './routes/authRoutes.js';

// ********** Import Session Store ********** //
import { sessionStore } from './models/mongoooseModel.js';

app.use(cors());

// setting up passport.js and session implementation:
// https://www.digitalocean.com/community/tutorials/easy-node-authentication-setup-and-local#toc-handling-signupregistration
// https://youtu.be/J1qXK66k1y4

// session initializer
app.use(
  session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

// ********** initialize passport config to ensure user creds ********** //
app.use(passport.initialize());
// ********** Related to express session middleware ********** //
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ******** //
// confirming that a session cookie is being set
// Sessions not currently functional in auth. Use this for testing
// app.get('/', function (req, res) {
//   res.send('Session info ' + JSON.stringify(req.session));
// });
// ******** //

// ********** Authentication Router ********** //
app.use('/auth', authRouter);

// ********** Catch-all Err Handler ********** //
app.use('*', (req, res) => res.status(404).json('ERROR 404: not found'));

// ********** Global Err Handler ********** //
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
