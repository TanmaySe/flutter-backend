const express = require('express');
const app = express()
app.use(express.json());
app.get('/api',async(req,res) => {
    res.json({message:"testing flutter with nodeJS"})
})