import mongoose from "mongoose";
import { connectDB } from "./db.mts";
import { Workshop } from "./models.mts";

async function main() {
    try {
        await connectDB();
        // Scenario 1: invalid workshop
        // const invalidWorkshop = new Workshop({ title: "Intro to Programming", seats: -10 });
        // const error = await invalidWorkshop.validate();
        // console.log(error);

        // Scenario 2
        const workshop = await Workshop.create({ title: "Intro to Programming", seats: 20 });
        await Workshop.findByIdAndUpdate(workshop._id, { seats: -10 });
        const found = await Workshop.findById(workshop._id);
        if (found?.seats <= 1) {
            throw new Error("Expected seat >= 1!");
        }
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}
main();