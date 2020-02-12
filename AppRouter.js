const AppRouter = require('express').Router()
const {
  BaseRouterProps,
  ControllerRouterProps
} = require('./config/RouterCreator')

ControllerRouterProps()

BaseRouterProps().forEach(route => AppRouter.use(route.path, route.router))

module.exports = AppRouter
