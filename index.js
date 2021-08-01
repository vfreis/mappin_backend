const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const userRoute = require('./routes/users')
const pinRoute = require('./routes/pins')

dotenv.config()

app.use(express.json())

mongoose
    .connect(process.env.MONGO_URL || "mongodb+srv://marioboss:crowslerplusmario@cluster0.9wrdk.mongodb.net/pin?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('MongoDB is connected')
    })
    .catch((err)=> console.log(err))

app.use('/api/users', userRoute)
app.use('/api/pins', pinRoute)

app.listen(process.env.PORT || 8800, ()=>{
    console.log('Backend server is running!')
})