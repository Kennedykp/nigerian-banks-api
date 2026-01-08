const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bankRoutes = require('./routes/bankRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/banks', bankRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Root
app.get('/', (req, res) => {
    res.send('Nigerian Banks API v1');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
