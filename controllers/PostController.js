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

	async getPosts(req, res) {
		res.json({ Message: 'Get posts' })
	}

	async getPostById(req, res) {
		res.json({ Message: `Get posts by ${req.params.id}` })
	}

	async createPost(req, res) {
		res.json({ Message: 'Create Posts' })
	}
}
