import express, { Express } from 'express';
import cors from 'cors';
import connect from './config';
import router from './routes';

const app: Express = express();
const PORT = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true, limit: 10000000 }));
app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
  connect();
  console.log(`server running on port ${PORT}`);
});
