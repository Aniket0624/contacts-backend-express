const contactsModel = require("../models/contactsModel");

const {
    addContactValidation,
    updateContactValidation
} = require('../middlewares/validation')

function getAllContactsController(req, res) {
    contactsModel.getAllContacts().then(data => res.send(data.rows)).catch(err => console.log(err));
}

function getContactsByController(req, res) {
    contactsModel.getContactBy(req.params).then(data => res.send(data.rows)).catch(err => console.log(err))
}

function addNewContactController(req, res) {
    const validationResult = addContactValidation(req.body);
    if (validationResult.error) {
        res.status(400).send(result.error.details[0].message);
    } else {
        contactsModel.addNewContact(req.body).then(data => res.send(data.rows)).catch(err => console.log(err))
    }
}

function updateContactController(req, res) {
    const validationResult = updateContactController(req.body);
    if (validationResult.error) {
        res.status(400).send(result.error.details[0].message);
    } else {
        contactsModel.updateContact(req.body, req.params).then(data => res.send(data.rows)).catch(err => console.log(err));
    }
}

function deleteContactController(req, res) {
    contactsModel.deleteContact(req.params).then(data => res.send(data.rows)).catch(err => console.log(err))
}

module.exports = {
    getAllContactsController,
    getContactsByController,
    addNewContactController,
    updateContactController,
    deleteContactController
}