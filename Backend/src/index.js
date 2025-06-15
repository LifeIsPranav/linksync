const express = require('express')
const cookieParser = require('cookie-parser')

const { serverConfig, connectDB } = require('./config')
const apiRouter = require('./routes')
const errorHandler = require('./utils/errorHandler')

const app = express()
const PORT = serverConfig.PORT

app.use(cookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Initial Setup Successful')
})

app.use('/api', apiRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Backend Successfully Connected at: http://localhost:${PORT} 🔥`);
  connectDB()
})