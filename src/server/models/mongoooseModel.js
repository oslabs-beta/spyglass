import mongoose from 'mongoose';
// package documentation: https://www.npmjs.com/package/connect-mongo
import MongoStore from 'connect-mongo';
import bcrypt from 'bcrypt';

const URI = import.meta.env.VITE_MONGO_URI;

// define new database options
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// connect to database
const dbConnection = await mongoose
  .connect(URI, dbOptions)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error));

// create new session
const sessionStore = MongoStore.create({
  mongoUrl: URI,
  // When the session cookie has an expiration date, connect-mongo will use it
  ttl: 14 * 24 * 60 * 60,
  // name of collection for storing sessions
  collectionName: 'sessions',
  // will autoremove expired sessions.
  autoRemove: 'native'
});

const Schema = mongoose.Schema;

// create User schema
const UserSchema = new Schema({
  // define local schema so future groups can implement OAuth
  local: {
    username: { type: String, required: true },
    password: { type: String, required: true }
  }
});

// will hash password on User create
UserSchema.pre('save', function (next) {
  const user = this;
  // generate a salt
  bcrypt.genSalt(8, function (err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.local.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.local.password = hash;
      next();
    });
  });
});

// generate hashed password on register
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hash(password, bcrypt.genSalt(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

export const User = mongoose.model('user', UserSchema);

export { URI, dbConnection, sessionStore };
