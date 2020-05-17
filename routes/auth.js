const { Router } = require("express"),
  bcrypt = require('bcrypt');

const router = new Router();

const User = require("../models/user.js");

router.post("/", (req, res) => {
  console.log(req.body);

  User.findOne({
    where: {
      userName: req.body.userName,
    },
  })
    .then((user) => {
      (bcrypt.compareSync(req.body.password, user.password, (err, result) => {
        if (result) {
          res.json(user);
        } else {
          res.status(401);
          res.send("wrong credentials");
        }
      }));
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
