const db = require("../db");
const express = require("express");
const router = express.Router({ mergeParams: true });

/** GET /        get comments for post
 *
 * => { id, text }
 *
 */

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      `
      SELECT id, text from comments WHERE post_id=$1 ORDER BY id`,
      [req.params.post_id]
    );
    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
