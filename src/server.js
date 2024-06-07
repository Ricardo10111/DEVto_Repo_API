const cors = require('cors')
const express = require('express')

const usersRouter = require('./router/users.router')
const postsRouter = require('./router/posts.router')
const authRouter = require('./router/auth.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'API POST V1'
  })
})

module.exports = app
