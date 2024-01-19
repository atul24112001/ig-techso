import mongoose from "mongoose";

const TutorialSchema = new mongoose.Schema({
    image: String,
    rating: Number,
    title: String,
    numberOfStudentsWatched: Number,
});

const Tutorial = mongoose.model("tutorials", TutorialSchema);

export default Tutorial;