const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const resiRoutes = require('./routes/resi');

const app = express();

app.use('/resis', resiRoutes);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT;

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch(err => console.log(err));