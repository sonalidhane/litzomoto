const validator = require("validator")
//                    object eq. {mobile,address,city,type,startTime,endTime}
exports.checkEmpty = (config) => {
    let isError = false
    const error = []
    for (const key in config) {
        if (validator.isEmpty(config[key] ? toString(config[key] ) : "")) {// isEMpty(confiq.mobile) isEMpty(confiq.address)
            isError = true
            error.push(`${key} is required`)
        }
    }
    return { isError, error }
}