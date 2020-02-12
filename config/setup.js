const fs = require('fs')
const ApplicationController = require('../controllers/ApplicationController')

const setup = () => {
  const controllersFile = fs.readFileSync(
    __dirname + '/./Controllers.json',
    'utf-8'
  )
  const controllers = JSON.parse(controllersFile).map(controller =>
    require(`../controllers/${controller.trim()}`)
  )

  const AppController = new ApplicationController(controllers)
  AppController.initializeControllers()

  return {
    BaseRouterProps: AppController.setupBaseRoutes(),
    ControllerRouterProps: AppController.initializeRouters()
  }
}

module.exports = { ...setup() }
