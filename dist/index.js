"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const html_1 = __importDefault(require("./routes/html"));
const db_1 = __importDefault(require("./routes/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/", html_1.default);
app.use("/db", db_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
