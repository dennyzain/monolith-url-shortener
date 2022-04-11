import { Request, Response } from 'express';
import { customAlphabet } from 'nanoid';

export const shortURL = async (req: Request, res: Response) => {
  const { fullUrl } = req.body;
  const nanoid = customAlphabet('1234567890abcdef', 10);

  res.status(201).send({ url: fullUrl, shortUrl: nanoid() });
};
