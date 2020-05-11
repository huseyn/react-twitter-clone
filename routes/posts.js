const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Post = require('../models/Post');

// @route POST api/posts
// @desc Add a post
router.post('/', async (req, res) => {
    try {
        const posts = await Post.find({ user: '5eb9ab1bed0de2145c442ddb' });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;