const userService = require("./service")

const plus = async (req, res) => {
  try{
    const sum = await userService.plusNumber(req.body)
    res.json(sum)
  }catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

}


module.exports = {
  plus
}