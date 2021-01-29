const mongoose = require('mongoose')
// const { mongoPath } = require('./config.json')

const mongoPath = 'mongodb+srv://raymond:Aq1BdI6iYkgqN5Vo@raymond.iawr3.mongodb.net/raymond?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
  })
  return mongoose
}