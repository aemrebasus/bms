import { getRepository } from '../db/getRepository';
import { createResourceRouter } from './createResourceRouter';

export const userRouter = createResourceRouter('/users', getRepository('users'));
