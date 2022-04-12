import { Request, Response } from 'express';
import { customAlphabet, urlAlphabet } from 'nanoid';
import { ShortUrl } from '../models/shortUrl.model';

export const getShortURL = async (req: Request, res: Response) => {
  const data= await ShortUrl.find()
  res.status(200).send({data});
};

export const addShortURL = async (req: Request, res: Response) => {
  const { fullUrl } = req.body;
  const nanoid= customAlphabet(urlAlphabet,6);
  const shortUrl:string=nanoid();
  const checkUrl=await ShortUrl.findOne({fullUrl});
  if(checkUrl){
       return res.status(401).send({data:checkUrl,message:'data already exist!'}) 
  }
  await ShortUrl.create({ fullUrl,shortUrl });
  res.status(201).send({ fullUrl, shortUrl });
};

export const redirectingUrl=async(req:Request,res:Response)=>{
    const id:string=req.params.id
    const data =await ShortUrl.findOne({shortUrl:id})
    if(!data){
      return res.status(404).send({data:[],message:'link not found!'})
    }
    const click=data.click
    await ShortUrl.findOneAndUpdate({shortUrl:id},{click:click+1})
    res.status(301).redirect(data.fullUrl)
  }