import mongoose, { Mongoose } from "mongoose";
import { MOVIES_GENRE } from "../../constant";

const moviesSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    movieDescription: {
        type:String,
        required:true
    },
    MovieDuration: {
        type: Number,
        required:true,
        min:1
    },
    movieRating:{
        type:Number,
        required:true,
        min:0.0,
        max:10.0
    },
    genre:{
        type:String,
        required: true,
        enum: MOVIES_GENRE
    },
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Participants"
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participants"
    },
    actors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participants"
    }]

});

const Movie = mongoose.model("Movie", moviesSchema);

export default Movie;
