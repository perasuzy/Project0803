const userService = require("./service")

const createUser = async (req, res) => {
  try{
    const user = await userService.createUser(req.body)
    res.json({
      message: "Create success",
      data: user
    })
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

const updateUser = async (req, res) => {
  try {

    const id = req.params.id
    const data = req.body

    const user = await userService.updateUser(id, data)

    res.json({
      message: "Update success",
      data: user
    })

  } catch (err) {

    res.status(400).json({
      message: err.message
    })

  }
}

const removeUser = async (req, res) => {
  try {

    const id = req.params.id

    const result = await userService.removeUser(id)

    res.json({
      message: "User removed",
      data: result
    })

  } catch (err) {

    res.status(400).json({
      message: err.message
    })

  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  removeUser
}