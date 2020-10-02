const getPrice = require('../services/prices');

test('Obtener valor del precio como string', () => {
    return getPrice().then(value => {
        expect(value).toEqual(expect.any(String));
    });
});