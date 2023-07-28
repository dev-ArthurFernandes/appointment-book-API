import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });
    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        addedAt: Date(),
        deletedAt: null,
      },
    });

    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
