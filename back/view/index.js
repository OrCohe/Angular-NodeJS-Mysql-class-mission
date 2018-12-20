const express = require('express');
const memberRouter = require('../router/person');
const taskRouter = require('../router/task');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/members', memberRouter);
app.use('/tasks', taskRouter);

app.listen(4500, ()=> console.log("running.."));