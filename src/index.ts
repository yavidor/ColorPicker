import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import htmlRouter from "./routes/html";
import dbRouter from "./routes/db";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", htmlRouter);
app.use("/db", dbRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
