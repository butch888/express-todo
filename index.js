const express = require('express');
const app = express();
const pool = require('./bd');
const cors = require('cors');

const getTasksRouter = require('./rest-api/getTasks');
const addTasksRouter = require('./rest-api/addTask');
const editTaskRouter = require('./rest-api/editTask');
const isdoneTaskRouter = require('./rest-api/isdoneTask');
const delTaskRouter = require('./rest-api/delTask');

app.use(cors());

// получить все записи по id
app.use('/', getTasksRouter);

// добавить задачу
app.use('/', addTasksRouter);

// редактировать текст задачи по id
app.use('/', editTaskRouter);

// отметить задачу выполненной по id
app.use('/', isdoneTaskRouter);

// удалить задачу по id
app.use('/', delTaskRouter);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server has started on PORT: ${PORT}`)
});