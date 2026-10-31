import { createServer } from "node:http";
import { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";

// const server = createServer((req, res) => {
//     res.end("Here's a response.");
// });

type Workshop = {
    _id: number;
    title: string;
    seats: number;
    price: number;
    instructorId: number;
}
const basePath = join(process.cwd(), "data");
const writePath = join(basePath, "workshops-summary.json");
const filePath = join(basePath, "workshops.json");
// read the file and convert 
// the string into an array of objects
async function loadWorkshops() {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as Workshop[];
}

const server = createServer(async (req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Workshop server is running");
        return;
    }
    
    if (req.method === "GET" && (req.url === "/workshops" || req.url === "/count")) {
        const workshops = await loadWorkshops();
        // if the url equals count -> return { count: 5 }
        // compose a response body
        const body = req.url === "/count" ? { count: workshops.length } : workshops;
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.end(JSON.stringify(body));
        return;
    }

    if (req.method === "GET" && req.url === "/summary") {
        try {
            const workshops = await loadWorkshops();
            const summary = {
                count: workshops.length,
                totalSeats: workshops.reduce((sum: number, currentWorkshop: Workshop) => sum + currentWorkshop.seats, 0)
            };
            res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
            res.end(JSON.stringify(summary));
        } catch {
            res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
            const errorRes = { error: "Workshop data unavailable" };
            res.end(JSON.stringify(errorRes));
        }
    }
    
    if (req.method === "GET" && req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/plain; charset=utf-8" });
        res.end("ok" );
        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
});

server.listen(3000);


async function writeSummary() {
    // TODO: try / catch
    const workshops = await loadWorkshops();
    const summary = {
        count: workshops.length,
        totalSeats: workshops.reduce((sum: number, currentWorkshop: Workshop) => sum + currentWorkshop.seats, 0)
    };

    await writeFile(writePath, JSON.stringify(summary), "utf8");
    console.log("File written successfully!");

}

writeSummary();