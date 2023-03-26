//import express 
import express  from 'express';
import passport from 'passport';
export const authRouter = express.Router();

import { authController } from '../controllers/authController.js'

// Process login form
authRouter.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

// Process signup form
authRouter.post('/register', authController.test, passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/register',
}));

