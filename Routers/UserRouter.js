const UserRouter = require('express').Router()
const UserController = require('../controllers/UserController')

const controller = new UserController()

function RouterProps(){
  const methods = Object.getOwnPropertyNames(controller.constructor.prototype).filter(method => method !== 'constructor')
  const paths = controller.paths
  return paths.map((path,index) => ({
    ...path, method: methods[index]
  }))
}

RouterProps().forEach(prop => 
  UserRouter[prop.httpMethod](prop.url, controller[prop.method])
)


module.exports = UserRouter
