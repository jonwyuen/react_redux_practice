const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// hook that runs before saving model
userSchema.pre("save", next => {
  const user = this;
  // salt + plain pw = (salt + hashed pw)
  // salt + submitted pw = hashed pw -> compare hashed pw in db
  // gen a salt then run cb
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // hash pw using salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      // overwrite pw with encrypted pw
      user.password = hash;
      next();
    });
  });
});

const ModelClass = mongoose.model("user", userSchema);

module.exports = ModelClass;
