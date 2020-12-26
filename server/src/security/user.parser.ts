import { RequestHandler } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_TOKEN_KEY, JWT_SECRET } from '../environment';

/**
 * @description Parser user info from jwt token stored into cookies
 */
export function userParser(): RequestHandler {
  return (req, res, next) => {
    try {
      const token = req.cookies(JWT_TOKEN_KEY);
      (req as any).user = verify(token, JWT_SECRET);
    } catch (err) {
      // DO NOTHING
    } finally {
      next();
    }
  };
}
