import { User } from '../models/mongoooseModel.js';

export const authController = {};

authController.credSuccess = async (req, res, next) => {
  const username = req.body.username;
  try {
    const userData = await User.findOne({ 'local.username': username });
    res.locals.userData = userData;
    next();
  } catch (err) {
    next(err);
  }
};