import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/challenge")
  .then(() => console.log('Succesfully connected to database'))
  .catch((e) => console.log(`Error during database connection : ${e}`))
