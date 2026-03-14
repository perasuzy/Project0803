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

module.exports = {
  createUser,
  getUsers
}