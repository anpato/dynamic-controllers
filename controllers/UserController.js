const express = require('express')
module.exports = class UserController {
  constructor() {
    this.basePath = '/users'
    this.router = express.Router()
    this.paths = [
      { httpMethod: 'get', url: '/' },
      { httpMethod: 'get', url: '/:id' },
      { httpMethod: 'post', url: '/' },
      { httpMethod: 'PUT', url: '/:ID' }
    ]
  }

  //  TODO: Find a way to assign specific functions to path in contructor

  // ! Methods have to remain in specific order to match the order in this.paths
  async get_Users(req, res) {
    res.json({ Message: 'Get Users' })
  }

  async get_usersById(req, res) {
    res.json({ Message: `Get Users by ${req.params.id}` })
  }

  async create_users(req, res) {
    res.json({ Message: 'Create Users' })
  }

  async update_user(req, res) {
    res.json({ Message: `Update User by id ${req.params.id}` })
  }
}
