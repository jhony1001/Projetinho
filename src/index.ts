require("dotenv").config();

import { createServer } from "xhelpers-api/lib/server";
const pkgJson = require("../package.json");

let server: any = {};
async function start() {
  const options: any = {
    serverOptions: {
      port: process.env.PORT || 300,
      host: process.env.HOST || "127.0.0.1",
    },
    options: {
      jwt_secret: process.env.JWT_SECRET,
      swaggerOptions: {
        info: {
          title: pkgJson.description,
          version: pkgJson.version,
        },
        grouping: "tags",
      },
      routeOptions: {
        routes: "*/routes/*.route.js",
      },
      sequelizeOptions: {
        host: process.env.SEQ_SQLDB_HOST,
        database: process.env.SEQ_SQLDB_DATABASE,
        username: process.env.SEQ_SQLDB_USER,
        password: process.env.SEQ_SQLDB_PASSWORD,
        models: [__dirname + "/model/**"],
        dialect: "mysql",
        dialectOptions: {
          connectTimeout: 60000
        }
      },
    },
  };

  server = await createServer(options);
  await server.start();
}
start();