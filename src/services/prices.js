require('dotenv').config()
const axios = require('axios');

const getApiUrl = source => `https://api.cambio.today/v1/quotes/${source}/ARS/json?quantity=1&key=${process.env.API_TOKEN}`;

/**
 * Solicita la cotizacion a la API
 * de cambio.today
 * @param {string} currency Puede ser USD, BRL, EUR
 */
module.exports = async (currency = 'USD') => {
    const response = await axios.get(getApiUrl(currency));

    return String(response.data.result.value.toFixed(2));
}