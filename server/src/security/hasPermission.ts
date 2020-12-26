import { UserInterface } from '../db/user.schema';

export function hasPermissions(user: UserInterface, permissions: string[]): boolean {
  try {
    for (const permission of permissions) {
      if (user.permissions.includes(permission)) {
        return true;
      }
    }
    return true;
  } catch (err) {
    return false;
  }
}
