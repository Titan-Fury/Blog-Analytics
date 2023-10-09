const _ = require('lodash');

const BlogService = {
    getBlogStats: (blogData) => {
        try {
            if (!blogData || !blogData.blogs || !Array.isArray(blogData.blogs.blogs)) {
                throw new Error('Invalid blog data');
            }

            const blogsArray = blogData.blogs.blogs;

            const totalPosts = blogsArray.length;

            // Find the blog with the longest title
            const longestBlog = _.maxBy(blogsArray, (blog) => blog.title.length);

            // Determine the number of blogs with "privacy" in the title
            const privacyBlogs = blogsArray.filter((blog) =>
                blog.title.toLowerCase().includes('privacy')
            ).length;

            // Create an array of unique blog titles (no duplicates)
            const uniqueTitles = _.uniq(blogsArray.map((blog) => blog.title));

            return {
                totalPosts,
                longestBlogTitle: longestBlog.title,
                privacyBlogs,
                uniqueBlogTitles: uniqueTitles,
            };
        } catch (error) {
            console.error('Error in getBlogStats:', error);
            throw error;
        }
    },

    searchBlogs: (blogData, query) => {
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
            console.error('Error in searchBlogs:', error);
            throw error;
        }
    },
};

module.exports = BlogService;
