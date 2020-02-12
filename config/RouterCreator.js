const ApplicationController = require('../controllers/ApplicationController')
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')

const fs = require('fs')
const controllersFile = fs.readFileSync(
  __dirname + '/./Controllers.json',
  'utf-8'
)

const controllers = JSON.parse(controllersFile).map(controller => {
  let controllerName = controller.name
  return eval(controllerName)
})
const AppController = new ApplicationController(eval(controllers))

function BaseRouterProps() {
  return AppController.setupBaseRoutes()
}

function ControllerRouterProps() {
  return AppController.initializeRouters()
}

module.exports = { BaseRouterProps, ControllerRouterProps }
