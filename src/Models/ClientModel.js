const mongoose = require ('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ClientSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    phone: Number,
    address: String,
    cpf: Number
})

const ClientModel = mongoose.model('clients', ClientSchema)
module.exports = ClientModel