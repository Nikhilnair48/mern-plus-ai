import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const sessions = [
  { id: "S-101", title: "React component design", track: "react" },
  { id: "S-102", title: "State without confusion", track: "react" },
  { id: "S-103", title: "TypeScript in practice", track: "typescript" },
  { id: "S-104", title: "Typed props and events", track: "typescript" },
];

const speakers = [
  { id: "SP-1", name: "Maya Chen", topic: "Designing resilient React state" },
  { id: "SP-2", name: "Arjun Rao", topic: "Type-safe frontend architecture" },
];

function mockApi(): Plugin {
  let sessionsRequests = 0;
  let speakerRequests = 0;

  return {
    name: "lecture-29-mock-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? "/", "http://localhost");
        const send = (status: number, body: unknown) => {
          setTimeout(() => {
            res.statusCode = status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(body));
          }, 650);
        };

        if (url.pathname === "/api/sessions") {
          sessionsRequests += 1;
          if (process.env.DEMO_FAIL_FIRST_SESSIONS === "1" && sessionsRequests === 1) {
            send(500, { message: "Could not load sessions." });
            return;
          }
          send(200, sessions);
          return;
        }

        if (url.pathname === "/api/speakers") {
          speakerRequests += 1;
          if (process.env.DEMO_FAIL_FIRST_SPEAKERS === "1" && speakerRequests === 1) {
            send(500, { message: "Could not load speakers." });
            return;
          }
          send(200, speakers);
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), mockApi()],
});
