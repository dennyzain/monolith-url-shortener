import express, { Router } from 'express';
import { shortURL } from '../controllers/shortUrl.controller';

const router: Router = express.Router();

router.get('/', shortURL);
router.post('/shorting', shortURL);

export default router;
