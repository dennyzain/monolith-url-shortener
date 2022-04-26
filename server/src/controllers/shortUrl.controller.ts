import { Request, Response } from 'express';
import { ShortUrl } from '../models/shortUrl.model';
import { nanoid } from 'nanoid';

export const getShortURL = async (req: Request, res: Response): Promise<void> => {
  const data = await ShortUrl.find();
  res.status(200).send({ data });
};

export const addShortURL = async (req: Request, res: Response): Promise<Response | void> => {
  const { fullUrl } = req.body;  
  const checkUrl = await ShortUrl.findOne({ fullUrl });
  const isValid =new URL(fullUrl).origin === process.env.URL_CLIENT || new URL(fullUrl).origin === 'http://localhost:3000'
  if(isValid){
    return res.status(400).send({ data: checkUrl, message: 'url not valid!' });
  }
  if (checkUrl) {
    await ShortUrl.updateOne({fullUrl},{shortUrl:nanoid(6)});
    return res.status(400).send({ data: checkUrl, message: 'short URL successfully created!' });
  }
  const response=await ShortUrl.create({ fullUrl,shortUrl:nanoid(6) });
  res.status(201).send({ data:response , message: 'short URL successfully created!' });
};

export const redirectingUrl = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const data = await ShortUrl.findOne({ shortUrl: id });
  if (!data) {
    return res.status(404).send({ data: [], message: 'link not found!' });
  }
  const click = data.click;
  await ShortUrl.findOneAndUpdate({ shortUrl: id }, { click: click + 1 });
  res.status(200).send({ data });
};
