const fs = require('fs')
const ApplicationController = require('../controllers/ApplicationController')

const setup = () => {
  const controllersFile = fs.readFileSync(
    __dirname + '/./Controllers.json',
    'utf-8'
  )
  const controllers = JSON.parse(controllersFile).map(controller => {
    let fileName = controller.split(' ')[1].split('()')[0]
    return require(`../controllers/${fileName}`)
  })

  const AppController = new ApplicationController(controllers)
  AppController.initializeControllers()

  return {
    BaseRouterProps: AppController.setupBaseRoutes(),
    ControllerRouterProps: AppController.initializeRouters()
  }
}

module.exports = setup
