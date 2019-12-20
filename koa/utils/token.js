const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt');

const getToken = payload => {
    return jwt.sign(payload, 'tomandjerry', { expiresIn: '1h' });
}

module.exports = getToken
