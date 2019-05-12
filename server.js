const express = require('express');
const logger = require('morgan');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(logger('dev'));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("Welcome to API, it's running..."));

app.use('/api/v1/auth', require('./routes/api/auth'));
app.use('/api/v1/users', require('./routes/api/users'));
app.use('/api/v1/profile', require('./routes/api/profile'));
app.use('/api/v1/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT} ...`));
