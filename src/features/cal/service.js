const User = require("./model")
const Common = require("../common/common_api")

const plusNumber = async (data) => {

  const sum = data.num1 + data.num2
  return  sum
}


module.exports = {
  plusNumber
}