const express = require('express');
const cors = require('cors'); // Импортируем пакет cors
const userRouter = require('./router/user.routes');
const postRouter = require('./router/post.routes');
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware для обработки CORS
app.use(cors({
  origin: 'http://localhost:5173', // Укажите разрешенный источник
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Включите методы, если это необходимо
  credentials: true, // Если вы хотите поддерживать куки и авторизацию
}));

// Middleware для обработки JSON
app.use(express.json()); // Для парсинга application/json

app.use('/api', userRouter);
app.use('/api', postRouter);

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`); // Исправлено: добавлены обратные кавычки
});
