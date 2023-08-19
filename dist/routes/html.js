"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const htmlRouter = (0, express_1.default)();
const publicDirectoryPath = path_1.default.join(__dirname, "../../public");
htmlRouter.get("/", (req, res) => {
    res.sendFile(path_1.default.join(publicDirectoryPath, "index.html"));
    console.log(req.hostname);
});
htmlRouter.get("/view.js", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../views/view.js"));
});
htmlRouter.get("/main.css", (req, res) => {
    res.sendFile(path_1.default.join(publicDirectoryPath, "main.css"));
});
exports.default = htmlRouter;
