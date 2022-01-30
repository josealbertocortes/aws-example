const express = require('express')


const app = express()

app.get(('/'),(req,res)=>res.send("<h1>hola con html </h1>"))


app.listen(8080)
