// import path from "path";
import Router, { Response, Request } from "express";
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
  return "done.";
}
const dbRouter = Router();
dbRouter.post("/add", (req: Request, res: Response) => {
  // console.log(req.);
  main().then(console.log).catch(console.error).finally(() => client.close());
  res.send("THANKS\n");
});
export default dbRouter;
