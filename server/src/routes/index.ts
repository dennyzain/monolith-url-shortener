import express, { Router } from 'express';
import { addShortURL, getShortURL, redirectingUrl} from '../controllers/shortUrl.controller';

const router: Router = express.Router();

router.get('/', getShortURL);
router.get('/:id', redirectingUrl);
router.post('/short-url', addShortURL);

export default router;
