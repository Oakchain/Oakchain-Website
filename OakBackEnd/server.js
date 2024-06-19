const express = require ('express');
const app = express();
const PORT = process.env.PORT || 1200;
const mongoose = require('mongoose');
const connectDB = require('./dataBase/dbConfig/dbConfig')

connectDB();

// To handle form data
app.use(express.urlencoded({extended: true}));

// built-in middleware to read json file into the server json
app.use(express.json());

app.use('/', require('./api/lmsApi'));

mongoose.connection.once('open', () => {
    console.log('Connected to Mongoose');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});