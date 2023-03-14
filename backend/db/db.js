const mongoose = require('mongoose')

const connectDB = async (app) => { 
    try {
        const PORT = process.env.PORT || 4000
        const URI = process.env.MONGO_URI
        await mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
        app.listen(PORT, console.log(`Server running on port ${PORT} and MONGO DB TO`))

    } catch (err) {
        console.log(err)
    }
 }

module.exports = connectDB