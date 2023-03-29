import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;

import { User } from '../models/mongoooseModel.js';

// passport config function
export const passportConfig = function (passport) {
  // passport session setup required for persistent login sessions passport needs ability to serialize and unserialize users out of session
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  });

  // LOCAL SIGNUP authentication
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function (req, username, password, done) {
        // asynchronous User.findOne wont fire unless data is sent back
        process.nextTick(async function () {
          try {
            const userCheck = await User.findOne({
              'local.username': username
            });
            if (userCheck) return done(null, false);
            else {
              const addUser = await User.create({
                local: { username: username, password: password }
              });
              return done(null, addUser);
            }
          } catch (err) {
            return done(err);
          }
        });
      }
    )
  );

  // LOCAL LOGIN authentication
  passport.use(
    'local-login',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      async function (req, username, password, done) {
        try {
          const checkUser = await User.findOne({ 'local.username': username });
          if (!checkUser) return done(null, false);
          if (!checkUser.validPassword(password)) return done(null, false);
          return done(null, checkUser);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
