import {Document, Schema, model } from 'mongoose';

interface ShortUrlTypes extends Document{
    fullUrl:string;
    shortUrl:string;
    click:number
}

const shortUrlSchema:Schema =new Schema<ShortUrlTypes>({
   fullUrl:{
       type:String,
       required:true
   },
   shortUrl:{
       type:String,
       required:true
   },
   click:{
       type:Number,
       required:true,
       default:0
   }
})
export const ShortUrl=model<ShortUrlTypes>('ShortUrl',shortUrlSchema)