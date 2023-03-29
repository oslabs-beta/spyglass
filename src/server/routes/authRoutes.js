//import express
import express from 'express';
import passport from 'passport';
export const authRouter = express.Router();

import { authController } from '../controllers/authController.js';
// Process login form
authRouter.post(
  '/login',
  passport.authenticate('local-login', {
    successMessage: 'authenticated',
    failureRedirect: '/auth/loginfailure'
  }),
  // authController.credSuccess,
  (req, res) => {
    res.status(203).json(req.session);
  }
);

// Process signup form
authRouter.post(
  '/signup',
  passport.authenticate('local-signup', {
    successMessage: 'authenticated',
    failureRedirect: '/auth/signupfailure'
  }),
  // authController.credSuccess,
  (req, res) => {
    res.status(203).json(req.session);
  }
);

// get user info and return via res.status(203).json(res.loclas.userInfo)
authRouter.get('/credentials', authController.credSuccess, (req, res) => {
  res.status(203).json(res.locals.userData);
});

// on failed login
authRouter.get('/loginfailure', (req, res) => {
  res.status(401).json('incorrect credentials');
});

// on failed signup
authRouter.get('/signupfailure', (req, res) => {
  res.status(401).json('incorrect format');
});
