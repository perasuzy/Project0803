const userService = require("./service")

const createUser = async (req, res) => {
  try{
    const user = await userService.createUser(req.body)
    res.json(user)
  }catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

}

const getUsers = async (req, res) => {
  try{
    const users = await userService.getUsers()
    res.json(users)
  }catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createUser,
  getUsers
}