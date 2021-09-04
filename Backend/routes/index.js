const auth = require('./auth')
const users = require('./users')
const courses =require('./courses')

module.exports = {
  authRouter : auth,
  usersRouter :  users,
  coursesRouter : courses 
}