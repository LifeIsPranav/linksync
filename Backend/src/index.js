const express = require('express')
const serverConfig = require('./config')
const apiRouter = require('./routes')

const app = express()
const PORT = serverConfig.PORT

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Initial Setup Successful')
})

app.use('/api', apiRouter)


app.listen(PORT, () => {
  console.log(`Backend Successfully Connected at: http://localhost:${PORT} 🔥`);
})