import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ;

if(!MONGODB_URI){
    throw new Error("plaease define MONGODB_URI in .env file" );


}
let cached = global.mongoose;

