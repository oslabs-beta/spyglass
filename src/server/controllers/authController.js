import { dbConnection, User } from '../models/mongoooseModel.js'


export const authController = {};

authController.test = async (req, res, next) => { 
  // console.log("connection: ", User)
  // res.locals.test= User
  // next()
  console.log('hello');
  next();
}

authController.login = async (req, res, next) => {
  res.locals.confirmation = {
    req: req.body,
    res: 'howdy'
  }
  next();
  // console.log('dbConnection: ', dbConnection)
  // const { username, password } = req.body;
  // try {
  //   const checkUser = await User.findOne({username})
  //   res.locals.confirmation = checkUser;
  //   return next();
  // } catch(err) {
  //   next(err);
  // }
}

authController.registerAdmin = async (req, res, next) => {
  
 
  
  
  const { username, password } = req.body;
  console.log('username: ', username, 'password: ', password)  
  try {
    const addUser = await User.create({ local: {username: username, password: password } })
    res.locals.addedUser = addUser;
    return next();
  } catch(err) {
    next(err);
  }
};


//module.exports = authController;