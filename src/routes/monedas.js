const getPrice = require('../services/prices');

module.exports = app => {
    app.get('/cotizacion/dolar', async (req, res) => {
        try {
            const value = await getPrice();
            res.json({ valor: value, moneda: 'Dolar' });
        } catch (err) {
            res.status(500).json({ error: 'No se pudo obtener la cotización del Dolar.', msg: err.message });
        }
    });

    app.get('/cotizacion/euro', async (req, res) => {
        try {
            const value = await getPrice('EUR');
            res.json({ valor: value, moneda: 'Euro' });
        } catch (err) {
            res.status(500).json({ error: 'No se pudo obtener la cotización del Euro.', msg: err.message });
        }
    });

    app.get('/cotizacion/real', async (req, res) => {
        try {
            const value = await getPrice('BRL');
            res.json({ valor: value, moneda: 'Real' });
        } catch (err) {
            res.status(500).json({ error: 'No se pudo obtener la cotización del Real.', msg: err.message });
        }
    });
}