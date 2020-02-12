const AppRouter = require('express').Router()
const { BaseRouterProps } = require('../config/setup')

BaseRouterProps.forEach(route => AppRouter.use(route.path, route.router))

module.exports = AppRouter
