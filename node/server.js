//backend
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesres-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

app.get('/', (req, res)=>{
    res.end("Welcome to root path.");
})

app.post('/api', (req, res)=>{
    const feedback = req.body.feedback;
    const username = req.body.username;

    // res.end("Recievefeedback : "+feedback+" username : "+username);
    res.json({result: "success", username: username, feedback: feedback});
})

app.listen(3000, ()=>{
    console.log("server is running");
})