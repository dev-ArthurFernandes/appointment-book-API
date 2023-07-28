import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  userExists = async (email?: string, id?: string) => {
    if (email) {
      if (await this.userRepository.findByEmail(email)) {
        throw new ConflictException('Email already exists!');
      }
    }
    if (id) {
      console.log('passou id');
      if (await this.userRepository.findOne(id)) {
        throw new NotFoundException('User not found!');
      }
    }
  };

  async create(createUserDto: CreateUserDto) {
    await this.userExists(createUserDto.email);

    const user = await this.userRepository.create({ ...createUserDto });

    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    this.userExists(id);

    return await this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.userExists(id);

    await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    this.userExists(id);

    this.userRepository.delete(id);
  }
}
