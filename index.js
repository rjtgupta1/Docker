const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("Hello from Docker 🐳");
})

app.listen(4000,()=>{
    console.log("Server is running on PORT 4000");
})