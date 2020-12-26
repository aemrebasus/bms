import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { hasPermissions } from './hasPermission';

export function hasPermissionMiddleware(permissions: string[]): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (hasPermissions(user, permissions)) {
      (req as any).permitted = true;
    } else {
      (req as any).permitted = false;
    }
    next();
  };
}
