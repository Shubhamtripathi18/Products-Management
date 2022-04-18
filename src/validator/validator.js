const mongoose = require("mongoose")

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false 
    return true;
} 

const isValidBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
}




const isValidName = function (name){
    if(!(/^[a-z ,.'-]+$/i.test(name))){
       return false
    }
    return true
}

const validQuantity = function isInteger(value) {
    if(value < 1) return false
     if(value % 1 == 0 ) return true
}



const isValidobjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const isValidEmail = function (value) {
    if (!(/^[a-z0-9+_.-]+@[a-z0-9.-]+$/.test(value.trim()))) {
        return false
    }
    return true
}

const isValidNumber = function (value) {
    // if (!(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(value.trim()))) {
        if (!(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(value.trim()))) {
            
        return false
    }
    return true
}

const validPincode = function (value){
    if(!(/^[1-9][0-9]{5}$/.test(value.trim()))){
        return false
    }
}

const isValidPassword = function(value) {
    if(!(/^[a-zA-Z0-9'@&#.\s]{8,15}$/.test(value))) {
        return false
    }
    return true
}

const isValidPrice = function(value) {
    if(!/^[0-9]+$/.test(value)){
        return false
    }
    return true
}

const isValidSize = function(value) {
    return ["S", "XS", "M", "X", "L", "XXL", "XL"].indexOf(value) !== -1
}








module.exports.isValid = isValid
module.exports.isValidBody = isValidBody
module.exports.isValidobjectId = isValidobjectId
module.exports.isValidEmail = isValidEmail
module.exports.isValidNumber = isValidNumber
module.exports.isValidPassword = isValidPassword
module.exports.isValidPrice = isValidPrice
module.exports.isValidSize = isValidSize
module.exports.validPincode = validPincode
module.exports.isValidName = isValidName
module.exports.validQuantity = validQuantity
