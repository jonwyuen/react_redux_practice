const Authentication = require("./controllers/authenication");

module.exports = app => {
  app.post("/signup", Authentication.signup);
};
