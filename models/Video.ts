/* eslint-disable @typescript-eslint/no-unused-vars */
 
import mongoose, { model,models } from "mongoose";


export const VIDEO_DIMENSIONS = {
    width: 1080,
    height: 1920,
}as const;
export interface Iuser {
    _id?:mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?:{
        width: number;
        height: number;
        quality?: number;
    }
}
const videoSchema = new mongoose.Schema<Iuser>({
    title: {type: String, required: true,},
    description: {type: String, required: true,},
    videoUrl: {type: String, required: true,},
    thumbnailUrl: {type: String, required: true,},
    controls: {type: Boolean, default: true,},
    transformation: {
        width: {type: Number, default: VIDEO_DIMENSIONS.width,},
        height: {type: Number, default: VIDEO_DIMENSIONS.height,},
        quality: {type: Number, min: 1, max: 100,},
         

        
    },
},{timestamps:true});
const Video = models?.video || model<Iuser>("video", videoSchema);
export default Video;