'use strict';

const { request, response } = require('express');

// make a variable called express to use the express library
const express = require('express');  //npm install express

// server has all the Express properties and methods
const server = express();
const PORT = process.env.PORT || 2000 ;

server.use(express.static( './public'));

server.get('/test',(request, response) =>{
    response.send('ahmad is a good man')
} )

// Route Definitions
//localhost:2000/
server.get('/',(req,res)=>{
    res.send('Home Route ')
})
server.listen (PORT, ()=> {
console.log('ahmad');
})