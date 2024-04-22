const { client } = require("../utils/MongoConnection");

async function getJobOffers(req, res) {
  try {
    await client.connect();

    const database = client.db("job-offers");
    const collection = database.collection("jobs");

    const jobs = await collection.find({}).toArray();
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found" });
    }

    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs: ", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
}

module.exports = { getJobOffers };
