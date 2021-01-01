import { SetMetadata } from '@nestjs/common';

export const HAS_PERMISSION_KEY = 'hasPermission';
export const HasPermission = (permissions: string[]) =>
  SetMetadata(HAS_PERMISSION_KEY, permissions);
