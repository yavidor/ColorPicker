"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import path from "path";
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new mongodb_1.MongoClient(url);
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
const dbRouter = (0, express_1.default)();
dbRouter.post("/add", (req, res) => {
    // console.log(req.);
    main().then(console.log).catch(console.error).finally(() => client.close());
    res.send("THANKS\n");
});
exports.default = dbRouter;
