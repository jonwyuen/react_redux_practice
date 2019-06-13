const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// create local strategy
// when user signs in, verify email and pw using local strategy -> give token
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify email and pw, call done w/ user
  // if it is correct email and pw, otherwise call done w/ false
  User.findOne({ email }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    // compare pws
    user.comparePassword(passowrd, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

// when user makes auth'd req, verify token with jwt strat -> resource access
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // see if user id in payload exists in db
  // if it does, call done with that, otherwise call done w/o user obj
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
