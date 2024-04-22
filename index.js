const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const jobOffersRoutes = require("./routes/jobOffersRoutes");
const userUpdateRoutes = require("./routes/userUpdateRoutes");
const { connectToMongoDB } = require("./utils/MongoConnection");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
connectToMongoDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/job-offers", jobOffersRoutes);
app.use("/api/user-update", userUpdateRoutes);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "/build")));

// Define route for serving React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
