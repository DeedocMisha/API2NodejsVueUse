const Router = require("express");
const routes = new Router();
const userController = require('../controller/user.controller');

// Привязка роутера к функциям контроллера
routes.post('/user', userController.createUser); // Создать нового пользователя
routes.get('/user', userController.getUsers); // Получить всех пользователей
routes.get('/user/:id', userController.getOneUser); // Получить пользователя по ID
routes.put('/user/:id', userController.updateUser); // Обновить пользователя по ID
routes.delete('/user/:id', userController.deleteUser); // Удалить пользователя по ID

module.exports = routes; // Экспортируем маршруты для использования в приложении
