const { client } = require("../utils/MongoConnection");

async function getProducts(req, res) {
  try {
    await client.connect();

    const database = client.db("react-native-app");
    const collection = database.collection("products");

    const products = await collection.find({}).toArray();
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
}

module.exports = { getProducts };
