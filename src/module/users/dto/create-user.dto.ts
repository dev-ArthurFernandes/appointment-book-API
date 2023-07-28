import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { hashSync } from 'bcryptjs';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(50)
  lastName?: string | null;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(200)
  email: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(200)
  recoveryEmail: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsString()
  @MinLength(13)
  @MaxLength(14)
  @IsNotEmpty()
  phone1: string;

  @IsString()
  @MinLength(14)
  @MaxLength(13)
  phone2?: string | null;

  @IsString()
  avatarURL?: string | null;
}
