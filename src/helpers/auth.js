const jwt = require('jsonwebtoken');
const {privateKey}=require('../keys');

const verifyToken = async (req) => {
    if (!(req.session && req.session.token)) throw new Error('No cookie')
    try {
        const token = req.session.token;
        const decoded = await jwt.verify(token, privateKey);
        return decoded;
    } catch (err) {
        throw new Error(err)
    }
};

// 3 min
exports.generateAuthToken = data => {
    return jwt.sign(data, privateKey, { expiresIn: 600000 });
}

exports.checkAuth = async (req, res, next) => {
    try {
        req.user = await verifyToken(req);
        next();
    } catch (err) {
        console.log('ERROR AUTH', err);
        return res.redirect('/');
    }
};

