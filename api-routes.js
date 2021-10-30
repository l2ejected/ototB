// Filename: api-routes.js

// Initialize express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to taskB1 stuffz'
    });
});

// Export APi routes
module.exports = router;

// Import contact controller
var contactController = require('./contactController');

// Contact routes
// View all contacts or add a new contact
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
    
// Update a contact by id - patch has same functionality as put
router.route('/contacts/update/:contact_id')
    .put(contactController.update); 

// Delete a contact by id
router.route('/contacts/delete/:contact_id')
    .delete(contactController.delete);

// View a specific contact by id
router.route('/contacts/view/:contact_id')
    .get(contactController.view);