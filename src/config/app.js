const express = require('express');
const app = express();
const { router } = require('../interfaces/routes/router');
const { verificarToken } = require('../interfaces/middlewares/login.token');
const authRouter = require('../interfaces/routes/login.router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Configuración CORS actualizada para permitir peticiones desde Flutter Web
const corsOptions = {
    origin: [
        'http://localhost:8000',      // Tu frontend web actual
        'http://localhost:56238',     // Tu app Flutter en Chrome
        'http://localhost:3000',      // Posible puerto de desarrollo
        'http://127.0.0.1:56238',     // Alternativa con IP local
    ],
    credentials: true,               // Importante para las cookies
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
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