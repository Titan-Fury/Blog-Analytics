# Blog Analytics Application

The Blog Analytics Application is a Node.js-based web service that provides statistics and search functionality for a collection of blogs. It fetches blog data from an external API, analyzes it, and allows users to query the data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Controllers](#controllers)
- [Services](#services)
- [Configuration](#configuration)
- [License](#license)

## Features

- Retrieve blog statistics, including the total number of posts, the longest blog title, the number of blogs with "privacy" in the title, and a list of unique blog titles.
- Search for blogs based on a query string with memoization to improve search performance.
- Fetch blog data from an external API using an admin secret for authentication.
- Built using Express.js and lodash for efficient data manipulation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- A valid admin secret for the external blog data API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-analytics.git
   ```

2. Change to the project directory:

   ```bash
   cd blog-analytics
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000` by default. You can access the API endpoints described below.

## API Endpoints

### 1. Fetch Blog Statistics

- **Endpoint**: `/api/blog-stats`
- **Method**: GET
- **Description**: Get statistics about the blogs, including the total number of posts, the longest blog title, the number of blogs with "privacy" in the title, and a list of unique blog titles.

### 2. Search Blogs

- **Endpoint**: `/api/blog-search`
- **Method**: GET
- **Description**: Search for blogs based on a query string. Query parameter `query` is required.

## Middleware

- `fetchBlogDataMiddleware`: This middleware fetches blog data from an external API and stores it globally for use in controllers.

## Controllers

- `BlogController`: Handles HTTP requests and responses. It provides two endpoints for fetching blog statistics and searching blogs.

## Services

- `BlogService`: Contains business logic for calculating blog statistics and implements memoization for efficient blog searching.

## Configuration

You can configure the external API endpoint and admin secret in the `fetchBlogDataMiddleware` in the `middlewares` directory.

```javascript
const apiUrl = 'https://example.com/api/rest/blogs'; // Replace with your API endpoint
const adminSecret = 'your-admin-secret'; // Replace with your admin secret
```

---
