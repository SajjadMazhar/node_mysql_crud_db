const express = require("express")
const app = express()

const port = process.env.port || 4000;
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("hello world")
})

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)

app.listen(port, ()=>{
    console.log("listenning to port ", port)

})