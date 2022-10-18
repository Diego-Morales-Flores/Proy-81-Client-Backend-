const Tokenfunctions = {};
const jwt = require("jsonwebtoken");

Tokenfunctions.createToken = async (data) => {
    try {
        const token = jwt.sign(data, process.env.JWT_KEY_SECRET);
        return token
    } catch (error) {
        return error
    }
}

module.exports = Tokenfunctions;