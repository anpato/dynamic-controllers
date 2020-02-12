const AppRouter = require('express').Router()
const setup = require('./config/RouterCreator')

setup().ControllerRouterProps

setup().BaseRouterProps.forEach(route =>
  AppRouter.use(route.path, route.router)
)

module.exports = AppRouter
