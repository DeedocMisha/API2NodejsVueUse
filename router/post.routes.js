const Router = require("express");
const router = new Router();
const postController = require('../controller/post.controller');

// Привязка роутера к функциям контроллера
router.post('/post', postController.createPost); // Создать нового пользователя
router.get('/post', postController.getPostsByUser); // Получить всех пользователей

module.exports = router; // Экспортируем маршруты для использования в приложении
