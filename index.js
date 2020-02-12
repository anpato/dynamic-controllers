const App = require('express')()
const AppRouter = require('./AppRouter')

const PORT = 3001

App.use('/api', AppRouter)
App.listen(3001, () => console.log('Listening on port: ', PORT))
