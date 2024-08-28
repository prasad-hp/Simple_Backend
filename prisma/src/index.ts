import express from "express"

const app = express()
app.use(express.json())

app.get("/", async(req, res)=>{
    res.json({message:"hello"})
})

app.listen(3000,()=>{`Listeing at the port 3000`})