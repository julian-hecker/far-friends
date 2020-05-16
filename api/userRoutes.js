const { Router } = require('express');
const router = new Router(),
    db = require('../db.js'),
    User = require('../models/user.js');

// Get All Users
router.get('/', (req, res) => {
    User.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            console.log('ERROR! ' + err);
        });
});


// Get Single User by ID
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
        },
    }).then(user => {
        res.json(user);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
});

// Create a user
router.post('/', (req, res) => {
    console.log(req.body, req.headers);
    const data = req.body;
    let { userName, firstName, lastName, email, gender, country } = data;

    User.create({
        userName,
        firstName,
        lastName,
        email,
        gender,
        country,
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.send(err);
    });
})



module.exports = router;