const { Router } = require('express');
const router = new Router(); 

const db = require('../controllers/index.js');

// Get All Users
router.get('/', (req, res) => {
    db.getUsers(req, res);
});

// Search for users
router.get('/search', (req, res) => {
    db.filterUsers(req, res);
});

// Get Single User by ID
router.get('/:id', (req, res) => {
    db.getUser(req, res); 
});

// Create a user
router.post('/', (req, res) => {
    db.createUser(req, res);
});



module.exports = router;