import path from "path";
import Router, { Response, Request } from "express";

const htmlRouter = Router();
const publicDirectoryPath = path.join(__dirname, "../../public");
htmlRouter.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(publicDirectoryPath, "index.html"));
  console.log(req.hostname);
});
htmlRouter.get("/view.js", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views/view.js"));
});
htmlRouter.get("/main.css", (req: Request, res: Response) => {
  res.sendFile(path.join(publicDirectoryPath, "main.css"));
});
export default htmlRouter;
