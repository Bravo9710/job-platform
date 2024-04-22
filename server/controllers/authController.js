const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { client } = require("../utils/MongoConnection");

async function register(req, res) {
  try {
    console.log("Register request");
    await client.connect();

    const database = client.db("job-offers");
    const collection = database.collection("users");

    // Check if user with the same email already exists
    const existingUser = await collection.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        message: "User with the same email already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    await collection.insertOne({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
}

async function login(req, res) {
  try {
    console.log("Login request");
    await client.connect();

    const database = client.db("job-offers");
    const collection = database.collection("users");

    // Find the user by email
    const user = await collection.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.json({ token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
}

module.exports = { register, login };
