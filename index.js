import express from "express"

const app = express()

const port = 3000;

app.get("/", (req, res)=>{
    console.log("Hello From Backend")
})

app.listen(port, ()=>{
    console.log(`Listening from port ${port}`)
})