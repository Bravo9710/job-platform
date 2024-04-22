const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const jobOffersRoutes = require("./routes/jobOffersRoutes");
const userUpdateRoutes = require("./routes/userUpdateRoutes");
const { connectToMongoDB } = require("./utils/MongoConnection");
const cors = require("cors");

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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
