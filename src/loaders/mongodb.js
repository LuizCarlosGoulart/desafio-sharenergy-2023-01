const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect(process.env.MONGODB_API_URL)
}

module.exports = startDB