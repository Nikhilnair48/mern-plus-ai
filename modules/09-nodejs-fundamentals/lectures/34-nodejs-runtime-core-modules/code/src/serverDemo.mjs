import { createServer } from "node:http";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

// const server = createServer((req, res) => {
//     res.end("Here's a response.");
// });

// read the file and convert 
// the string into an array of objects
const filePath = join(process.cwd(), "data", "workshops.json");
const raw = readFileSync(filePath, "utf8");
const workshops = JSON.parse(raw);

const server = createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Workshop server is running");
        return;
    }
    
    if (req.method === "GET" && req.url === "/workshops") {
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.end(JSON.stringify(workshops));
        return;
    }

    if (req.method === "GET" && req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end("ok" );
        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
});

server.listen(3000);