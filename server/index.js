// Function import // WE ARE GOING TO USE MVC Structure
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();

const path = require('path');

// listening Port and address
app.listen(7000,()=>{    
    console.log("The Local machine Address is : http://localhost:7000");
})

// data base Connectivity import user function 
const connectionFuntion = require("./db/connection");
connectionFuntion();

require(path.join(__dirname, "./routes/user.router"))(app);
require(path.join(__dirname, "./routes/product.router"))(app);
require(path.join(__dirname, "./routes/cart.router"))(app);
