const request = require('supertest');
const app = require('../app');
describe('Endpoints', () => {
    test('Endpoint no encontrado', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.body).toMatchObject({
                    msg: expect.any(String),
                    dolarUrl: expect.any(String),
                    euroUrl: expect.any(String),
                    realUrl: expect.any(String)
                });
                expect(res.statusCode).toBe(404)
            });
    });

    test.each(['Dolar', 'Euro', 'Real'])(`Cotizacion del %s`, currency => {
        return request(app)
            .get(`/cotizacion/${currency.toLowerCase()}`)
            .then(res => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual(expect.objectContaining({
                    moneda: expect.stringMatching(currency),
                    valor: expect.any(String),
                }));
            });
    });
});