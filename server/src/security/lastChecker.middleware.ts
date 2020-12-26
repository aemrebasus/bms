import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { isRequestHasUser } from './isRequestHasUser';
import { isUserPassedPermissions } from './isUserPassedPermissions';

export function lastCheckerMiddleware(): RequestHandler {
  return (req, res, next) => {
    console.log('Is Public : ', (req as any).public);
    console.log('Is Secured : ', (req as any).secured);
    console.log('Is Permitted : ', (req as any).permitted);

    if ((req as any).public) {
      next();
    } else if (isRequestHasUser(req) && isUserPassedPermissions(req)) {
      next();
    } else {
      res.status(StatusCodes.UNAUTHORIZED).send({ msg: 'Not Authorized.' });
    }
  };
}
