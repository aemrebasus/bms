import { Request } from 'express';

export function isUserPassedPermissions(req: Request): boolean {
  return !!(req as any).permitted;
}
