const router = require('express').Router();
const contactController = require('../controllers/contacts')

// Get all contact data from the database
router.get('/', contactController.getAll);

// Get one contact by searching for their ID
router.get('/:id', contactController.getSingle);

// Create a new contact
router.post('/', contactController.newContact);

// Edit an existing contact by searching for their ID
router.put('/:id', contactController.editContact);

// Delete an existing contact by searching for their ID
router.delete('/:id', contactController.deleteContact)

module.exports = router;