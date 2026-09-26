import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
const resources = [
  { id: "R-1", title: "Redux Toolkit Essentials", category: "Redux" },
  { id: "R-2", title: "Typed React Patterns", category: "TypeScript" },
  { id: "R-3", title: "Async UI Checklist", category: "React" },
];
function mockApi(): Plugin {
  let requests = 0;
  return { name: "resource-mock-api", configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = new URL(req.url ?? "/", "http://localhost");
      if (url.pathname !== "/api/resources") { next(); return; }
      requests += 1;
      setTimeout(() => {
        if (process.env.DEMO_FAIL_FIRST_RESOURCES === "1" && requests === 1) {
          res.statusCode = 500; res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Could not load resources." })); return;
        }
        res.statusCode = 200; res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(resources));
      }, 650);
    });
  }};
}
export default defineConfig({ plugins: [react(), mockApi()] });
