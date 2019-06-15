const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// hook that runs before saving model
userSchema.pre("save", function(next) {
  const user = this;
  // salt + plain pw = (salt + hashed pw) saved in db
  // compare pws by pulling salt from db to encrypt submitted pw
  // which turns into a hashed pw, then compare hashed pw in db
  // gen a salt then run cb
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    // hash pw using salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // overwrite pw with encrypted pw
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePw, cb) {
  bcrypt.compare(candidatePw, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const ModelClass = mongoose.model("user", userSchema);

module.exports = ModelClass;
