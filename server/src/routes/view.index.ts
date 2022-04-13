import express, { Router } from 'express';
import { viewAddShortURL, viewGetShortURL, viewRedirectingUrl } from '../controllers/view.controller';

const router: Router = express.Router();

router.get('/', viewGetShortURL);
router.get('/:id', viewRedirectingUrl);
router.post('/short-url', viewAddShortURL);

export default router;
