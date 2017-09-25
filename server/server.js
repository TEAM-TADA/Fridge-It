const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// File imports
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Routes
// app.use(express.static(path.resolve(__dirname, 'client/public')));
app.use('/api', routes);

// Server Initialization
app.listen(port, () => {
  console.log('Listening on port: ', port);
});