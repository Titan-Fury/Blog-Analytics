const fetch = require('node-fetch');

let globalBlogData; // Declare the global variable

const fetchBlogDataMiddleware = async (req, res, next) => {
    if (globalBlogData) {
        req.blogData = globalBlogData;
        next();
    } else {
        const apiUrl = 'https://example.com/api/rest/blogs'; // Replace with your API endpoint
        const adminSecret = 'your-admin-secret'; // Replace with your admin secret

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'x-hasura-admin-secret': adminSecret,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch blog data. Status: ${response.status}`);
            }

            const blogData = await response.json();

            const transformedBlogData = {
                blogs: blogData,
            };

            globalBlogData = transformedBlogData;
            req.blogData = globalBlogData;

            next();
        } catch (error) {
            console.error(error);

            res.status(500).json({ error: 'Failed to fetch blog data' });
        }
    }
};

module.exports = fetchBlogDataMiddleware;
