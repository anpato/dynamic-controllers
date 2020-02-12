const express = require('express')

module.exports = class PostController {
  constructor() {
    this.basePath = '/posts'
    this.router = express.Router()
    this.paths = [
      { httpMethod: 'get', url: '/' },
      { httpMethod: 'get', url: '/:id' },
      { httpMethod: 'post', url: '/' }
    ]
  }
  async get_posts(req, res) {
    res.json({ Message: 'Get posts' })
  }

  async get_postsById(req, res) {
    res.json({ Message: `Get posts by ${req.params.id}` })
  }

  async create_posts(req, res) {
    res.json({ Message: 'Create Posts' })
  }
}
