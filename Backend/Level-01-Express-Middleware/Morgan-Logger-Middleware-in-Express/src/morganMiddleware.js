const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Custom Morgan format
morgan.token('date', () => new Date().toISOString());
morgan.token('http-version', (req) => req.httpVersion);

const customFormat = ':method :status :res[content-length] - :response-time ms :date HTTP/:http-version :url';

// Morgan middleware
const morganMiddleware = morgan(customFormat, { stream: accessLogStream });

module.exports = morganMiddleware;
