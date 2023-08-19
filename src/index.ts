import dotenv from "dotenv";
import express, { Request, Response } from "express";
import htmlRouter from "./routes/html";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.get("/add", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("GO HOME");
});
app.use("/", htmlRouter);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
