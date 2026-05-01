const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")

const methodOverride = require("method-override")
const morgan = require("morgan")

const authRouter = require('./routes/auth')
const restaurantRouter = require('./routes/restaurant')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`connected to mongoDB ${mongoose.connection.name}.`)
})


const response = (req,res) => {
  res.send('<h1> Hello Valto </h1>')
}
app.get('/', response)
app.use('/auth', authRouter)
app.use('/restaurant', restaurantRouter)


app.use(methodOverride("_method"))
app.use(morgan("dev"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
