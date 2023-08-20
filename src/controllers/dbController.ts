// import path from "path";
import Router, { Response, Request } from "express";
import main from "../models/dbModel";

const dbRouter = Router();
dbRouter.post("/add", (req: Request, res: Response) => {
  console.log(req.body);
  main().then(console.log).catch(console.error);
  res.status(418).send("THANKS\n");
});
export default dbRouter;
