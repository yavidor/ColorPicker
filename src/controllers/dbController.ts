import Router, { Response, Request } from "express";
import { createEntity, readEntity, deleteEntity } from "../models/dbModel";

const dbRouter = Router();

dbRouter.get("/read/:id", async (req: Request, res: Response) => res.send(await readEntity(req.params.id)));

dbRouter.post("/add", async (req: Request, res: Response) => res.send(await createEntity(req.body)));

dbRouter.delete("/delete", async (req: Request, res: Response) => res.send(await deleteEntity(req.body).then(console.log)
  .catch(console.error)));

export default dbRouter;
