const express = require('express');
const fetchBlogDataMiddleware = require('./middlewares/fetchBlogData');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(fetchBlogDataMiddleware);

// Define the base URL for your routes as '/api'
app.use('/api', blogRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
