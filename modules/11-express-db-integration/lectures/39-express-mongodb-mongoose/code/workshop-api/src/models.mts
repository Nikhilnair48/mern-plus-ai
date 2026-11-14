import { model, Schema } from "mongoose";

const workshopSchema = new Schema({
    title: {
        type: String, required: true, trim: true, minLength: 3, maxLength: 80
    },
    seats: {
        type: Number, required: true, min: 1, max: 50
    }
});

export const Workshop = model("Workshop", workshopSchema);
