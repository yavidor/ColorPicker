import Router, { Response, Request } from "express";
import { createEntity, readEntity, deleteEntity } from "../models/dbModel";

const dbRouter = Router();

dbRouter.get(["/read", "/read/id/:id"], async (req: Request, res: Response) => res.send(await readEntity(req.params?.id)));

dbRouter.post("/add", async (req: Request, res: Response) => res.send(await createEntity(req.body)));

dbRouter.delete("/delete", async (req: Request, res: Response) => res.send(await deleteEntity()));
export default dbRouter;
