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

/** GET /[id]  get detail on post
 *
 * Returns:
 *
 * =>   { id,
 *        title,
 *        description,
 *        body,
 *        votes,
 *        comments: [ { id, text }, ... ],
 *      }
 */

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      `
      SELECT 
        p.id, p.title, p.description, p.body, p.votes,
        CASE WHEN COUNT(c.id) = 0 THEN JSON '[]' 
          ELSE JSON_AGG(
          JSON_BUILD_OBJECT('id', c.id, 'text', c.text)) END AS comments 
      FROM posts p 
        LEFT JOIN comments c ON c.post_id = p.id
      WHERE p.id = $1
      GROUP BY p.id
      ORDER BY p.id
      `,
      [req.params.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

/** POST /     add a new post
 *
 * { title, description, body }  =>  { id, title, description, body, votes }
 *
 */

router.post("/" async (req, res, next) => {
  try {
    const { title, description, body } = req.params;
    const result = await db.query(`
      INSERT INTO posts (title, description, body) 
      VALUES ($1, $2, $3) 
      RETURNING *`, [title, description, body])
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
})

