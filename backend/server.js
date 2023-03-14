const express = require('express')
const workoutRoutes = require('./routes/workouts')
const connectDB = require('./db/db')

require('dotenv').config()
// the config method it's going to attach those enviornment variables for us to the process object

const app = express()

connectDB(app)

app.use(express.json())
// sets up middleware for parsing JSON data in incoming HTTP requests.

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//  .use(RUTA, routes)
app.use('/api/workouts',workoutRoutes)
// when we fire a request to RUTA then i I want to use workoutRoutes