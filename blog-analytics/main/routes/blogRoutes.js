const express = require('express');
const fetchBlogDataMiddleware = require('../middlewares/fetchBlogData');
const BlogController = require('../controllers/blogControl');

router = express.Router();

// Middleware to fetch blog data
router.use('/fetch-blogs', fetchBlogDataMiddleware);

// Route to get blog statistics
router.get('/blog-stats', BlogController.getBlogStats);

// Route for blog search
router.get('/blog-search', BlogController.searchBlogs);

module.exports = router;
