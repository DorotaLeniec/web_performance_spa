import express from "express";
import compression from "compression";
import render from "hyperapp-render";
import fs from "fs";
import { state, view } from "./page.js";

const server = express();
const assetsDir = process.env.NODE_ENV === "production" ? "./dist" : ".";
const htmlTemplate = fs.readFileSync(`${assetsDir}/index.html`, "UTF-8");
server.use(compression());
server.get("/ssr", function(req, res) {
  const content = render.renderToString(view(state));
  res.send(htmlTemplate.replace("<!-- PLACEHOLDER -->", content));
});
server.get("/data.json", (req, res) => {
  fs.createReadStream("./data.json").pipe(res);
});
server.use(express.static(assetsDir));

server.listen(3000, () => console.log("Example app listening on port 3000!"));