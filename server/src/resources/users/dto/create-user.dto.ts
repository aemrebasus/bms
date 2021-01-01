import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  Length,
  ArrayNotEmpty,
  IsAlphanumeric,
  IsAlpha,
  IsString,
  IsEmpty,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    required: true,
    minLength: 2,
    maxLength: 255,
  })
  @IsString()
  @IsAlpha()
  @Length(2, 255)
  firstName: string;

  @ApiProperty({
    type: 'string',
    required: true,
    minLength: 2,
    maxLength: 255,
  })
  @IsString()
  @IsAlpha()
  @Length(2, 255)
  lastName: string;

  @ApiProperty({
    type: 'string',
    required: true,
    format: 'email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
    required: true,
    minLength: 2,
    maxLength: 255,
  })
  @IsString()
  @IsAlphanumeric()
  @Length(2, 255)
  username: string;

  @ApiProperty({
    type: 'string',
    required: true,
    minLength: 8,
    maxLength: 255,
  })
  @IsString()
  @Length(8, 255)
  password: string;

  @ApiProperty({
    type: 'array',
    default: ['guest'],
  })
  @ArrayNotEmpty()
  permissions: string[];

  @ApiProperty({
    type: 'array',
    default: ['guest'],
  })
  @ArrayNotEmpty()
  subscriptions: string[];

  @ApiProperty({
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 255,
  })
  @IsString()
  @IsAlphanumeric()
  @Length(3, 255)
  organization: string;

  @IsEmpty()
  active: boolean;
}
