const express = require('express');
const app = express();
const { router } = require('../interfaces/routes/router');
const { verificarToken } = require('../interfaces/middlewares/login.token');
const authRouter = require('../interfaces/routes/login.router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: 'http://localhost:8000',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/', authRouter);
app.use('/api', verificarToken, router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
