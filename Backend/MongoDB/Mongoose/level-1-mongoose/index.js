/*
Instructions
User & Product Management
Whatever we have covered in today's session , you have to replicate that along with additional things as well:

Connect MongoDB to a JS file.
Build the schema for user and product.
Build the Model for user and product.
Write the logic to POST, READ, UPDATE, DELETE the user and product
Also, Before adding any user to the database, if the user already exist or not, if yes then duplicate user should not be added.

*/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const User = require("./models/user.model");
const Product = require("./models/product.model");

mongoose.connect("mongodb://127.0.0.1:27017/users")

// write user and prodect model or schema logic below after that copy paste it into therir respective models




// write index.js logic below
app.use(express.json());

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})