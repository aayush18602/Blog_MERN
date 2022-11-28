const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.end("all blogs")
})
app.listen(5000,()=>{
    console.log("Server listening at port 5000");
})