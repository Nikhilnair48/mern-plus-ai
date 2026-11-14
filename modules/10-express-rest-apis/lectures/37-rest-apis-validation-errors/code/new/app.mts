import express from "express";
import { Workshop, initializeWorkshops, isRecord, validateWorkshopInput } from "./workshop-core.mts";


export function createApp(seed: Workshop[]) {
    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const workshops = initializeWorkshops(seed);
    
    app.use((_req: any, res: any, next: any) => {
        res.set("X-Workshop-Lab", "Express");
        // continue to the next one
        next();
    })
    
    app.get("/", (_req: any, res: any) => {
        res.type("text/plain")
            .send("Workshop succssfully retrieved!")
    })
    
    // GET all workshops; filter: minSeats
    app.get("/workshops", async  (req: any, _res: any) => {
        const raw = req.query.minSeats;
        const minSeats = typeof raw === "string" ? Number(raw) : undefined;
        
        // const items = await loadWorkshops();
        // if minSeats is undef -> return all workshops
        // if minSeats is def -> filter all the workshops by minSeats
        const resItems = minSeats === undefined ?
            items : items.filter((item) => item.seats >= minSeats);
    
        console.log(resItems);
        res.json(resItems);
    })
    
    // GET workshop by Id
    app.get("/workshops/:id", async (req, res) => {
        try {
    
            //validate
            // check if id is invalid -> return 400
    
            const id = Number(req.params.id);
    
            const items = await loadWorkshops();
            // from the array of objects, items, 
            // we need to find the item with ID of id param
            const workshop = items.find((item) => item._id === id);
            // invalid scenario
            if (workshop === undefined) {
                res.status(404).json({ error: "Workshop not found!" });
                return;
            }
            // valid scenario
            res.json(workshop);
        } catch {
    
        }
    })
    
    app.post("/workshops/preview", (req, res) => {
        const { title, seats } = req.body;
        res.status(200).json({ title, seats, saved: false });
    })
    
    app.get("/health", (req, res) => {
        res.send("OK");
    })
    
    app.get("/summary", async (req, res) => {
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
    })
    
    app.use((req, res) => {
        res.status(404).type("text/plain").send("Workshop data is unavailable!");
    })

    return { app, workshops };
}

/*
curl -i -X POST http://localhost:3000/workshops/preview \
  -H 'Content-Type: application/json' \
  -d '{"title":"Pottery","seats":20}'

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 44
ETag: W/"2c-C7alHDgVQnfy/nWutFNdkTuMQnc"
Date: Sun, 01 Nov 2026 05:39:33 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"title":"Pottery","seats":20,"saved":false}

*/