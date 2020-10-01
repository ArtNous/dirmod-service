const getPrice = require('../services/prices');

test('Obtener valor numérico del precio', () => {
    return getPrice().then(value => {
        expect(value).toBeGreaterThan(0);
    });
});