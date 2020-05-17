const { Op } = require('sequelize');
User = require('../models/user.js');


function filterSearchKeys(obj) { 
    filtObj = {}; 
    for(let key in obj) {
        if(obj[key] != '' && (key != 'minAge' && key != 'maxAge')) {
           filtObj[key] = obj[key]; 
        }
    }
    filtObj['age'] = {[Op.between]: [Number(obj.minAge), Number(obj.maxAge)]}; 
    return filtObj;
} 



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
    console.log(req.query);
    let filts = filterSearchKeys(req.query); 
    console.log(filts);

    User.findAll({
        where: filts,
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
            id: req.params.id,
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
