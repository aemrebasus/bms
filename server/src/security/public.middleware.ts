import { NextFunction, Request, Response, RequestHandler } from 'express';

export function publicMiddleware(): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    (req as any).public = true;
    next();
  };
}
