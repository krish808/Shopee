// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Sample route
app.get("/", (req, res) => {
  res.send("Welcome to my backend server!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
