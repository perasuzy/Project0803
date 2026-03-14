const User = require("./model")
const Common = require("./../common/common_api")

const createUser = async (data) => {

  const existingUser = await User.findOne({ email: data.email })
  if (existingUser) {
    throw new Error("Email already exists")
  }

  const userSchema = {
    name: "string",
    email: "string"
  }
  const validateUserType = await Common.checkType(data, userSchema)
  if (validateUserType) {
    throw new Error(validateUserType)
  }


  const user = new User(data)
  return await user.save()
}

const getUsers = async () => {

  return await User.find()

}

const updateUser = async (id, data) => {

  const userSchema = {
    name: "string",
    email: "string"
  }

  const validateUserType = await Common.checkType(data, userSchema)
  if (validateUserType) {
    throw new Error(validateUserType)
  }

  const user = await User.findByIdAndUpdate(
    id,
    { 
      $set: data,
      lastUpdateDate: new Date() 
    },
    { new: true }
  )

  if (!user) {
    throw new Error("User not found")
  }

  return user
}

const removeUser = async (id) => {

  const user = await User.findByIdAndDelete(id)

  if (!user) {
    throw new Error("User not found")
  }

  return user
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  removeUser
}