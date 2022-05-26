const express = require("express")
const path = require("path")
const http = require("http")
const port = process.env.PORT || 2000
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)

const io = socketio(server)

var msg = ""
io.on("connection", (socket,err)=>{
    if (err) throw err
    console.log("Websocket connected")
    socket.on("clientMessage",(clietMessage, Name)=>{
        let name1 = Name
        msg = clietMessage
        io.emit("serverMessage",msg , name1)
    })
})



const pathDir = path.join(__dirname,"../public")

app.use(express.static(pathDir))


app.get("/",(req,res)=>{
    res.sendFile(__dirname,"../public/index.html")
})





server.listen(port, (err)=>{
    if (err) throw err
    console.log("Server is listening on port " + port)
})