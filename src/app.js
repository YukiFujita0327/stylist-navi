"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
class Main {
    constructor() {
        const server = (0, http_1.createServer)((request, response) => this.requestHandler(request, response));
        server.listen("5000");
        console.log("http://localhost:5000 へアクセスください");
    }
    requestHandler(request, response) {
        response.end("hello! NodeJs!!");
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map