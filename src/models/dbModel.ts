import { Document as mongoDocument, MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "main";

const readEntity = async (id: string) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("results");
  const found = await collection.find({ _id: new ObjectId(id) }).toArray();
  await client.close();
  return found.length ? found : "No entities found";
};

const createEntity = async (entity: mongoDocument) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("results");
  const inserted = await collection.insertOne(entity);
  await client.close();
  return inserted.insertedId;
};
const deleteEntity = async (entity: mongoDocument) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("results");
  const deleted = await collection.deleteOne(entity);
  await client.close();
  return deleted.deletedCount;
};
export { createEntity, readEntity, deleteEntity };
