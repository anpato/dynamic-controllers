module.exports = class ApplicationController {
  constructor(Controllers) {
    this.basePaths = []
    this.basePath = '/api'
    this.controllers = Controllers
  }

  initializeControllers() {
    this.controllers = this.controllers.map(controller => new controller())
  }

  setupBaseRoutes() {
    return this.controllers.map(controller => {
      return {
        path: controller.basePath.toLowerCase(),
        router: controller.router
      }
    })
  }

  setupControllerRoutes() {
    return this.controllers.map(controller => ({
      name: controller,
      options: this.configurePaths(
        controller.paths,
        this.filterMethods(
          Object.getOwnPropertyNames(controller.constructor.prototype)
        )
      ),
      router: controller.router
    }))
  }

  initializeRouters() {
    const controllers = this.setupControllerRoutes()
    controllers.forEach(controller => {
      const { options } = controller
      return options.map(option => {
        controller.router[option.httpMethod.toLowerCase()](
          option.url.toLowerCase(),
          controller.name[option.method]
        )
      })
    })
  }

  configurePaths(pathsConfig, methods) {
    return pathsConfig.map((config, index) => ({
      ...config,
      method: methods[index]
    }))
  }

  filterMethods(methods) {
    return methods.filter(method => method !== 'constructor')
  }
}
