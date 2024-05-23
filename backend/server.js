import express from "express";
import "dotenv/config";

import { mongoConfig } from "./config.js";

import todoRouters from "./routes/todoRoutes.js";

const port = 8080;

const app = express();
app.use(express.json());

app.use("/api/todos", todoRouters);

app.get("/", (req, res) => {
  res.json("Hello! (from Server)");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
  mongoConfig();
});
