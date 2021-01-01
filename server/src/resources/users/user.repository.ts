import { ValueProvider } from '@nestjs/common';
import { createRepository } from '../../utils';
import { User } from './entities/user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';
export const UserRepository: ValueProvider = createRepository(
  USER_REPOSITORY,
  User,
);
