const Posts = require('../models/posts.model')

async function create(post) {
  const newPost = await Posts.create(post)
  return newPost
}

async function getAll() {
  const posts = await Posts.find().populate('name')
  return posts
}
async function getById(id) {
  const post = await Posts.findById(id).populate('name')
  return post
}

async function updateById(id, postDate) {
  const post = await Posts.findByIdAndUpdate(id, postDate, { new: true })
  return post
}

async function deleteById(id) {
  const post = await Posts.findByIdAndDelete(id)
  return post
}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
  getById
}
