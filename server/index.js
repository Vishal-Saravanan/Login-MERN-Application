const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Login")

app.post('/login', (req, res) => {
    const { email, password } = req.body; // Extract email and password from request body
    EmployeeModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.status(404).json("No user found"); // Respond with 404 status if user not found
            }
        })
        .catch(err => {
            console.error('Error during login:', err);
            res.status(500).json("Server error"); // Handle any errors that occur during database operation
        });
});

app.post('/register', (req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log('server is running')
})