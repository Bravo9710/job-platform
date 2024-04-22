const { client } = require("../utils/MongoConnection");

async function updateUser(req, res) {
  try {
    await client.connect();

    const database = client.db("job-offers");
    const collection = database.collection("users");

    // Check if user with the same email already exists
    const existingUser = await collection.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Update user details
    await collection.updateOne(
      { email: req.body.email },
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
        },
      },
    );

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
}

module.exports = { updateUser };
