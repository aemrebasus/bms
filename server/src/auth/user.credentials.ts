import { IsAlphanumeric, IsString, Length } from 'class-validator';

export class UserCredentials {
  @IsString()
  @IsAlphanumeric()
  @Length(2, 255)
  username: string;
  @IsString()
  @Length(8, 255)
  password: string;
}
