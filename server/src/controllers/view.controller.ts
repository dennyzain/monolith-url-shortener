import { Request, Response } from 'express';
import { ShortUrl } from '../models/shortUrl.model';


export const viewGetShortURL = async(req: Request, res: Response):Promise<void> => {
  const data  = await ShortUrl.find()
  res.render('index',{data})
};

export const viewAddShortURL = async (req: Request, res: Response):Promise<Response|void> => {
  const { fullUrl } = req.body;
  const checkUrl=await ShortUrl.findOne({fullUrl});
  if(checkUrl){
       return res.status(401).send({data:checkUrl,message:'data already exist!'}) 
  }
  await ShortUrl.create({ fullUrl});
  res.redirect('/');
};

export const viewRedirectingUrl=async(req:Request,res:Response):Promise<Response|void> => {
    const id:string=req.params.id
    const data =await ShortUrl.findOne({shortUrl:id})
    if(!data){
      return res.status(404).send({data:[],message:'link not found!'})
    }
    const click=data.click
    await ShortUrl.findOneAndUpdate({shortUrl:id},{click:click+1})
    res.redirect(data.fullUrl)
}