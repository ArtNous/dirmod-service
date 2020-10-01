const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const cors = require('cors');

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use(cors());
registerRoutes(app);

app.use(function(req, res, next) {
    res.status(404).json({
        msg: "Lo siento, no consigo lo que me estas pidiendo, intenta con las siguientes url.",
        dolarUrl: '/cotizacion/dolar',
        euroUrl: '/cotizacion/euro',
        realUrl: '/cotizacion/real',
    });
});

module.exports = app;