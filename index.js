const express = require("express");
const cors = require("cors");
const connectDB = require("./db");


const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Routes


// Connect Database
connectDB();


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is Running");
});
