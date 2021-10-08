"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const server_1 = require("xhelpers-api/lib/server");
const pkgJson = require("../package.json");
let server = {};
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
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
        server = yield server_1.createServer(options);
        yield server.start();
    });
}
start();
//# sourceMappingURL=index.js.map