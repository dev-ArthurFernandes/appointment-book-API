import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

// data transfer object
export class CreateContactDto {
  readonly id: string;

  @IsString()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email2: string | null;

  @IsString()
  @MaxLength(14)
  phone1: string;

  @IsString()
  @MaxLength(14)
  @IsOptional()
  phone2: string | null;

  @IsString()
  @IsOptional()
  avatarURL: string | null;
}
