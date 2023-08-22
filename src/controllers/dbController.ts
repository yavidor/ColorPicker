import Router, { Response, Request } from "express";
import { createEntity, readEntity, deleteEntity } from "../models/dbModel";

const dbRouter = Router();

dbRouter.get(["/read", "/read/id/:id"], async (req: Request, res: Response) => res.send(await readEntity(req.params?.id).then(console.log).catch(console.error)));

dbRouter.post("/add", async (req: Request, res: Response) => res.send(await createEntity(req.body).then(console.log).catch(console.error)));

dbRouter.delete("/delete", async (req: Request, res: Response) => res.send(await deleteEntity().then(console.log).catch(console.error)));
export default dbRouter;
