import express, { Router } from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { userParser } from './security/user.parser';
import { UserRouter } from './user.router';
import { Controllers } from './decorators/Mapper';

new UserRouter();
export const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(userParser());

