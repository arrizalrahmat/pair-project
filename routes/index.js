const route = require('express').Router()
const gameController = require('../controllers/gameController.js')
const userController = require('../controllers/userController.js')
const authenticationMiddleWare = require('../middlewares/authenticationmiddlewares.js')
const Controller = require('../controllers/gameController.js')


//USER
route.get('/login', userController.login)
route.post('/login', userController.loginPost)
route.get('/register', userController.register)
route.post('/register', userController.registerPost)

//HOME
route.get('/', gameController.home)

route.use(authenticationMiddleWare)

//GAME
route.get('/games', gameController.viewGames)
route.get('/games/add', gameController.add)
route.post('/games/add', gameController.addPost)
route.get('/games/edit/:id', Controller.edit)
route.post('/games/edit/:id', Controller.editPost)
route.get('/games/delete/:id', gameController.deleteGame)
route.get('/games/rent/:id', gameController.rent)


module.exports = route