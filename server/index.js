const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const productsRoutes = require("./routes/productsRoutes");
const { connectToMongoDB } = require("./utils/MongoConnection");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas
connectToMongoDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
