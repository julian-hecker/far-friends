const { Op } = require('sequelize');
User = require('./models/user.js');


module.exports.getUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.error(err);
        });
}


module.exports.filterUsers = (req, res) => {
    // filters:
        // userName
        // minAge 
        // maxAge 
        // gender
        // location
        // language
        // other
    console.log(req.query);


    // we need to create an object that goes into `where` parameter.
    // `where` has all the checks that the model makes against the database
    // 

    User.findAll({
        where: {
            userName: req.query.userName,
        }
    })
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        console.error(err);
    })
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
        console.error(err);
    });
}


module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.sendStatus(200);
        }).catch(err => {
            console.error(err);
        });
}
