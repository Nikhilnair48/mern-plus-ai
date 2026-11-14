import { createApp } from "./app.mts";
import { connectDB } from "./db.mts";

async function main() {
    // try/catch
    await connectDB();
    const { app } = createApp();
    const port = Number(process.env.PORT ?? 3000);
    app.listen(port, () => console.log(`Listening on :${port}`));
}

main();