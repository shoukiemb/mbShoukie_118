const express = require('express');                                           //Headers
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const path = require('path')
const multer = require('multer')
const userModel = require('./models/userModel.js')
const recipeModel = require('./models/recipeModel.js')

const app = express();


app.use(express.json());
app.use(cors({                                      //This will transfer the data coming from frontend to JSON
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser())

mongoose.connect("mongodb+srv://cd:shoukie@cluster0.m3sdjy1.mongodb.net/recipe_users")      //Mongo connector



app.get('/recipelist', (req, res) => {
    recipeModel.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})


app.post('/recipesubmission', (req, res) => {
    const { title, methodology, ingredients, estTime, imageUrl, userId } = req.body;
    recipeModel.create({ title, methodology, ingredients, estTime, imageUrl, userId })
        .then((results) => {
            return res.json(results)
        })
        .catch(err => console.log(err))
})
const verifyUser = (req, res, next) => {                        //middleware
    const token = req.cookies.token;
    if (!token) {
        return res.json("The token was not available")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return res.json("Token is wrong")
            else {
                req.email = decoded.email;
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get('/home', verifyUser, (req, res) => {
    return res.json({ email: req.email, name: req.name })
})


//This will generate req.body object to derive the data and check whether email and/or password is/are correct
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: user.email })

    if (user) {
        const validPassword = await bcrypt.compare(password, user.password)

        if (validPassword) {
            const token = jwt.sign({ email: email }, "JWT-SECRET-KEY", { expiresIn: '1d' })
            res.cookie('token', token)
            res.json("Success");
        }
        else {
            res.json("Incorrect Password")
        }

    } else {
        res.json("User doesn't exist")
    }
})



app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hashed => {
            userModel.create({ name, email, password: hashed })
                .then(user => res.json(user))
                .catch(err => res.json(err))
        }).catch(err => console.log(err))

    console.log(name, email, password, "Server")
})


app.listen(3001, () => {
    console.log("Back end server is running");
})