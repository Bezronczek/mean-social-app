const Post = require('../../models/post');
const router = require('express').Router();
const websockets = require('../../websockets');

router.get('/', (req, res, next) => {
  Post.find()
    .sort('-date')
    .exec()
    .then(posts => res.json(posts))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const post = new Post({
    body: req.body.body
  });

  post.username = req.auth.username;

  post
    .save()
    .then(post => {
      websockets.broadcast('new_post', post);
      res.json(201, post)
    })
    .catch(err => next(err));

});

module.exports = router;