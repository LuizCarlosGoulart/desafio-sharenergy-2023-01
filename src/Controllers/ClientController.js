const { response } = require('express')
const ClientModel = require('../Models/ClientModel')

class ClientController {
    async register(req, res) {

        const { name, email, phone, address, cpf } = req.body

        if (!name || !email || !phone || !address || !cpf) {
            return res.status(400).json({message: "Todas os dados são necessários para que o cadastro seja realizado."})
        }
        const createdClient = await ClientModel.create(req.body)
        return res.status(200).json(createdClient)
    }

    async index(req, res) {
        const clients = await ClientModel.find()
        return res.status(200).json(clients)
    }

    async show(req, res) {
        try {
            const { id } = req.params
            const client = await ClientModel.findById(id)

            if (!client) {
                return res.status(400).json({message: "Este cliente não existe."})
            }

            return res.status(200).json(client)
        } catch (error) {
            return res.status(400).json({message: "Falha ao encontrar o cliente."})
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            await ClientModel.findByIdAndUpdate(id, req.body)

            return res.status(200).json({message: "Cliente atualizado."})
        } catch (error) {
            return res.status(400).json({message: "Falha ao atualizar o cliente."})
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const clientDeleted = await ClientModel.findByIdAndDelete(id)

            if (!clientDeleted) {
                return res.status(400).json({message: "Falha ao deletar o cliente."})
            }
            return res.status(200).json({message: "O cliente foi deletado."})
        } catch (error) {
            return res.status(404).json({message: "Este cliente não existe."})
        }
    }
}

module.exports = new ClientController()