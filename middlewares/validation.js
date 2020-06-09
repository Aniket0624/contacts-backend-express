const Joi = require('joi');

function addContactValidation(body) {
    const schema = {
        first_name : Joi.string().required().min(1),
        last_name : Joi.string().required().min(1),
        mobile_no : Joi.string().required().min(10)
    }
    return Joi.validate(body, schema);
}

function updateContactValidation(body) {
    const schema = {
        id : Joi.number().required(),
        value : Joi.string().required()
    }
    return Joi.validate(body, schema);
}

module.exports = {
    addContactValidation,
    updateContactValidation
}