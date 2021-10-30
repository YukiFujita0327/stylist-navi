import  {Server, IncomingMessage, ServerResponse, createServer} from "http"

class Main {
    constructor() {
        const server: Server = createServer(
            (request: IncomingMessage, response: ServerResponse) => this.requestHandler(request, response)
        );
        server.listen("5000");
        console.log("http://localhost:5000 へアクセスください");
    }

    private requestHandler(request: IncomingMessage, response: ServerResponse) :void {
        response.end("hello! NodeJs!!");
    }
}

const main = new Main();