const express = require('express')

module.exports = class UserController {
	constructor() {
		this.basePath = '/users'
		this.router = express.Router()
		this.paths = [
			{ httpMethod: 'get', url: '/' },
			{ httpMethod: 'get', url: '/:id' },
			{ httpMethod: 'post', url: '/' },
			{ httpMethod: 'put', url: '/:id' }
		]
	}

	//  TODO: Find a way to assign specific functions to path in contructor

	// ! Methods have to remain in specific order to match the order in this.paths
	async getUsers(req, res) {
		res.json({ Message: 'Get Users' })
	}

	async getUsersById(req, res) {
		res.json({ Message: `Get Users by ${req.params.id}` })
	}

	async createUsers(req, res) {
		res.json({ Message: 'Create Users' })
	}

	async updateUser(req, res) {
		res.json({ Message: `Update User by id ${req.params.id}` })
	}
}
