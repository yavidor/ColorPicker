import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import htmlRouter from "./controllers/htmlController";
import dbRouter from "./controllers/dbController";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());
app.use("/", htmlRouter);
app.use("/db", dbRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
