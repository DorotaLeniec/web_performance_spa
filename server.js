import express from 'express';
import compression from 'compression';

const server = express();
const assetsDir = process.env.NODE_ENV === "production" ? "./dist" : ".";

server.use(compression());
server.use(express.static(assetsDir));

server.listen(3000, () => console.log('Example app listening on port 3000!'));