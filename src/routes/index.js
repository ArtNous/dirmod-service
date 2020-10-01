const currencyRoutes = require('./monedas');

module.exports = app => {
    currencyRoutes(app);
}