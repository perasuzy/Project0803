function validate(schema) {

    return (req, res, next) => {
      const data = req.body
      for (const key in schema) {
        const expectedType = schema[key]
        if (typeof data[key] !== expectedType) {
          return res.status(400).json({
            message: `${key} must be ${expectedType}`
          })
        }
      }
      next()
    }
  }
  
  module.exports = validate