const { Op } = require('sequelize');
User = require('./models/user.js');


function filterSearchKeys(filters) { 
    filtObj = {}; 
    for(let [k, v] in Object.entries(filters)) {
        if(v != '' && (k != 'minAge' || k != 'maxAge')) {
           filtObj[k] = v; 
        }
    }
    filtObj['age'] = {[Op.and]: [filters.minAge, filters.maxAge]}; 
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
