const BlogService = require('../services/blogService');
const _ = require('lodash');

// Time to cache search results in milliseconds (e.g., 5 minutes)
const cacheDuration = 5 * 60 * 1000;

// Memoize the search function
const memoizedSearchBlogs = _.memoize((blogData, query) => {
    try {
        if (!blogData || !blogData.blogs || !Array.isArray(blogData.blogs.blogs)) {
            throw new Error('Invalid blog data');
        }

        const blogsArray = blogData.blogs.blogs;

        // Implement search functionality to filter blogs based on the query string
        const searchResults = blogsArray.filter((blog) =>
            blog.title.toLowerCase().includes(query.toLowerCase())
        );

        return searchResults;
    } catch (error) {
        console.error('Error in memoizedSearchBlogs:', error);
        throw error;
    }
}, (blogData, query) => `${query}`, cacheDuration);

const BlogController = {
    getBlogStats: (req, res) => {
        try {
            if (!req.blogData || !req.blogData.blogs || !Array.isArray(req.blogData.blogs.blogs)) {
                throw new Error('Blog data is missing or invalid');
            }

            const stats = BlogService.getBlogStats(req.blogData);

            res.json(stats);
        } catch (error) {
            console.error('Error in getBlogStats:', error);
            res.status(500).json({ error: error.message });
        }
    },

    // Implement the Blog Search Endpoint with memoization
    searchBlogs: (req, res) => {
        const query = req.query.query;

        if (!query || query.trim() === '') {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        try {
            if (!req.blogData || !req.blogData.blogs || !Array.isArray(req.blogData.blogs.blogs)) {
                throw new Error('Blog data is missing or invalid');
            }

            // Use the memoized search function
            const searchResults = memoizedSearchBlogs(req.blogData, query);

            res.json(searchResults);
        } catch (error) {
            console.error('Error in searchBlogs:', error);
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = BlogController;
