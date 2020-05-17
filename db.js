const { Op } = require('sequelize');
User = require('./models/user.js');


module.exports.getUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.err(err);
        });
}


module.exports.getUser = (req, res) => {
    User.findOne({
        where: {
            id: req.body.id,
        }
    })
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        console.err(err);
    });
}


module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.sendStatus(200);
        }).catch(err => {
            console.err(err);
        });
}


module.exports.filterUsers = (req, res) => {
    //filters
    userName
    minAge 
    maxAge 
    gender
    location
    language
    other
    User.findAll({

    })
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        console.err(err);
    })
} 