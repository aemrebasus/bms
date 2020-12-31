import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base-resource/base.service';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from './user.repository';

@Injectable()
export class UsersService extends BaseService {
  constructor(@Inject(USER_REPOSITORY) private userRepo: typeof User) {
    super(userRepo);
  }
}
