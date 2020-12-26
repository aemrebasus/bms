import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { initDatabase } from './database';

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  initDatabase();
});
