const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    try {
      const newPost = await db.query(
        'INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *',
        [title, content, userId]
      );
      res.json(newPost.rows[0]);
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
      res.status(500).send("Произошла ошибка при создании поста.");
    }
  }

  async getPostsByUser(req, res) {
    const id = req.query.id;
    try {
      const posts = await db.query(
        'SELECT * FROM post WHERE user_id = $1',
        [id]
      );
      res.json(posts.rows);
    } catch (error) {
      console.error("Ошибка при получении постов:", error);
      res.status(500).send("Произошла ошибка при получении постов.");
    }
  }
}

module.exports = new PostController();