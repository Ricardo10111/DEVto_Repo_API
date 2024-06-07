const useCaseUsers = require('../usecases/users.usecase')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const user = req.body
    const newUser = await useCaseUsers.create(user)
    res.json({
      success: true,
      message: 'User created',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await useCaseUsers.getById(id)

    res.json({
      success: true,
      message: 'User found',
      data: {
        user
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
