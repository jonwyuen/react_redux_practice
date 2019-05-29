const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");

// cors needs to be before routes
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/posts/:post_id/comments", commentsRoutes);
app.use("/api/posts", postsRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

app.use((err, req, res, next) => {
  if (err.stack) console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
});

module.exports = app;
