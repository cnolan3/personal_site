const express = require('express');
const app = express();
const blogPostRoute = express.Router();

// blog post model
let blogPost = require('../models/blog_post');

// add blog post
blogPostRoute.route('/create').post((req, res, next) => {
    blogPost.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// get all blog posts
blogPostRoute.route('/').get((req, res) => {
    blogPost.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// get single blog post
blogPostRoute.route('/get/:id').get((req, res) => {
    blogPost.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// delete blog post
blogPostRoute.route('/delete/:id').delete((req, res, next) => {
    blogPost.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = blogPostRoute;