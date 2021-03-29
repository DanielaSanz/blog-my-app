const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

const app = express();

app.set('port', 4000 || 4001);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', indexRouter);

module.exports = app;