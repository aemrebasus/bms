import { RequestHandler, Request, Response, NextFunction } from 'express';

export function secureMiddleware(): RequestHandler {
  return (req: Request, res, next) => {
    (req as any).secured = true;
    next();
  };
}
