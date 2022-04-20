import express, { Express } from 'express';
import cors from 'cors';
import connect from './config';
import router from './routes';
import viewRouter from './routes/view.index';

const app: Express = express();
const PORT:number = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true, limit: 10000000 }));
app.use(express.json());
app.use(cors());

app.set('view engine','ejs');
app.set('views',__dirname+'/views')

app.use('/api', router);
app.use('/', viewRouter);

app.listen(PORT, ():void => {
  connect();
  console.log(`server running on port ${PORT}`);
});
