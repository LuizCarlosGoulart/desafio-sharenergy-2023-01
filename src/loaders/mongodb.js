const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect('mongodb+srv://admin:123@cluster0.dgfrnvb.mongodb.net/test')
}

module.exports = startDB