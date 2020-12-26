import { Request } from 'express';

export function isRequestHasUser(req: Request): boolean {
  return !!(req as any).user;
}
