const db = require("../db");
const express = require("express");
const router = express.Router();

/** GET /   get overview of posts
 *
 * Returns:
 *
 * => [ { id,
 *        title,
 *        description,
 *        votes,
 *      },
 *      ...
 *    ]
 *
 */

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query(`
      SELECT p.id, p.title, p.description, p.votes 
      FROM posts p
      ORDER BY p.id`);

    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
