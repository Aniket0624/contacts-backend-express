const express = require('express'); 
const router = express.Router();

const contactController = require('../controller/contactController');

router.get('/allcontacts', contactController.getAllContactsController);
router.get('/searchcontactbyname/:query/:value', contactController.getContactsByController);

router.post('/newcontact', contactController.addNewContactController);

router.put('/updatecontact/:query', contactController.updateContactController);

router.delete('/deletecontact/:query', contactController.deleteContactController);

module.exports = router;