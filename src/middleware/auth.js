const dotenv = require('dotenv');

dotenv.config();

const authenticateAdmin = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const adminApiKey = process.env.ADMIN_API_KEY;

    if (!adminApiKey) {
        console.error('ADMIN_API_KEY is not set in environment variables.');
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!apiKey || apiKey !== adminApiKey) {
        return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
    }

    next();
};

module.exports = authenticateAdmin;
