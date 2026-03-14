function checkType(data, schema) {
    for (const key in schema) {
        const expectedType = schema[key]
        if (typeof data[key] !== expectedType) {
            return `${key} must be ${expectedType}`
        }
    }
}

module.exports = {
    checkType
}