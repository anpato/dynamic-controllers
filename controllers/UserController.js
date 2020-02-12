const express = require('express')
module.exports = class UserController {
  constructor() {
    this.basePath = '/users'
    this.router = express.Router()
    this.paths = [
      { httpMethod: 'get', url: '/' },
      { httpMethod: 'get', url: '/:id' },
      { httpMethod: 'post', url: '/' }
    ]
  }

  async get_Users(req, res) {
    res.json({ Message: 'Get Users' })
  }

  async get_usersById(req, res) {
    res.json({ Message: `Get Users by ${req.params.id}` })
  }

  async create_users(req, res) {
    res.json({ Message: 'Create Users' })
  }
}
