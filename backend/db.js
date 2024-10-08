const mongoose = require('mongoose') ;
const colors = require('colors')
require('dotenv').config()

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(colors.inverse('Connection is Successfull'))
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect ;