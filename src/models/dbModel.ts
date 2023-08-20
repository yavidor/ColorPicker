import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "main";
async function main() {
  await client.connect();
  console.log("connected");
  const db = client.db(dbName);
  const collection = db.collection("mainCollection");
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  await client.close();
  return "done.";
}
export default main;
