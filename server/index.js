const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// TODO: Implement GET /api/users endpoint
// Fetch data from https://jsonplaceholder.typicode.com/users
// and return it to the frontend

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
