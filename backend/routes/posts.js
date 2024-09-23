const router = require('express').Router();
let Post = require('../models/post');

// get all posts 
router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get single post 
router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add new post 
router.route('/new').post((req, res) => {

  const title = req.body.title;
  const description = req.body.description;
  const newPost = new Post({title, description});

  newPost.save()
    .then(() => res.json('Post added successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete post 
router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update post 
router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title;
      post.description = req.body.description;

      post.save()
        .then(() => res.json('post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;