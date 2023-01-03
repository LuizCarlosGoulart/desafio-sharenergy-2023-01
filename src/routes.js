const { Router } = require('express')
const ClientController = require('./Controllers/ClientController')
const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server is on.'})
})

routes.post('/clients', ClientController.register)
routes.get('/clients', ClientController.index)
routes.get('/clients/:id', ClientController.show)
routes.put('/clients/:id', ClientController.update)
routes.delete('/clients/:id', ClientController.delete)

module.exports = routes