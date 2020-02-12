const App = require('express')()
const AppRouter = require('./routes/AppRouter')

const PORT = 3001

App.use('/api', AppRouter)
App.listen(3001, () => console.log('Listening on port: ', PORT))
