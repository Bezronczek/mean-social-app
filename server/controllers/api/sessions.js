const router = require('express').Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../../config');

router.post('/', (req, res, next) => {
  User.findOne({username: req.body.username})
    .select('password')
    .select('username')
    .exec()
    .then(user => {
      if(!user) return res.sendStatus(401);

      bcrypt.compare(req.body.password, user.password, (err, valid) => {
        if (err) return next(err);
        if(!valid) return res.sendStatus(401);
        const token = jwt.encode({username: user.username}, config.secret);
        res.send(token);
      });
    })
    .catch(err => next(err));
});

module.exports = router;