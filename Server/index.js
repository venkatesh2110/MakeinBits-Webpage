const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./db');
const bodyparser = require('body-parser');


const contact = require('./controllers/contactController');
const career = require('./controllers/careerController');

app.use(cors());
app.use(bodyparser.json());

app.use('/contacts',contact);
app.use('/careers',career);

app.listen(8000, () => console.log('Server is running at 8000'));