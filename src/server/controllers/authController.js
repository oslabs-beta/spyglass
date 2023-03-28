import { dbConnection, User } from '../models/mongoooseModel.js';

export const authController = {};

authController.test = async (req, res, next) => {
  // console.log("connection: ", User)
  // res.locals.test= User
  // next()
  console.log('hello');
  next();
};

authController.credSuccess = async (req, res, next) => {
  const username = req.body.username;

  console.log('username: ', username);
  try {
    const userData = await User.findOne({ 'local.username': username });
    res.locals.userData = userData;
    next();
  } catch (err) {
    next(err);
  }
};

//module.exports = authController;
