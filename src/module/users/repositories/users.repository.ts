import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export abstract class UserRepository {
  abstract create(data: CreateUserDto): Promise<User>;

  abstract findAll(): Promise<User[]>;

  abstract findOne(id: string): Promise<User>;

  abstract findByEmail(email: string): Promise<User>;

  abstract update(id: string, data: UpdateUserDto): Promise<void>;

  abstract delete(id: string): Promise<void>;
}
