const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const app = express();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
    res.status(200).json("Welcome to the flight pasa API");
});

//Routes
app.use('/flightpasa/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {console.log(`Server is running on port ${port}`)});