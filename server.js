const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use("/todo", require("./routes/todoRouter"))

app.listen(8700, () => {
    console.log("Server lisening on port 8700")
})