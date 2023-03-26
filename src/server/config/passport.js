// load all the things we need
import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;

// load up the user model
import { User } from '../models/mongoooseModel.js';

// passport config function
export const passportConfig = function(passport) {
  // passport session setup required for persistent login sessions passport needs ability to serialize and unserialize users out of session
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(async function(id, done) {
    try {
      const user = await User.findById(id)
      return done(null, user)
    } catch (err) {
      return done(err);
    }
  });

  // LOCAL SIGNUP   
  passport.use('local-signup', new LocalStrategy({
    
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) {
    // asynchronous User.findOne wont fire unless data is sent back
    process.nextTick( async function() {
      try {
        const userCheck = await User.findOne({'local.username' : username});
        // if user is found, return done(null, false);
        if (userCheck) return done(null, false);
        else {
          const addUser = await User.create({ local: {username: username, password: password } })
          return done(null, addUser);
        } 
      } catch(err) {
        return done(err);
      }
    });
  }));

   // LOCAL LOGIN 
  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  async function(req, username, password, done) { // 
  try {
    const checkUser = await User.findOne({'local.username' : username})
    // if no user is found, return 
    if (!checkUser) return done(null, false);
    // if the user is found but the password is wrong
    if (!checkUser.validPassword(password)) return done(null, false); 
    // all is well, return successful user
    return done(null, checkUser);
  } catch(err) {
    return done(err);
  }
  }));
};

