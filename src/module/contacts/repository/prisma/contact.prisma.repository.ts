import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../contact.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        ...contact,
        userId,
      },
    });
    return newContact;
  }

  async findAll(userId: string): Promise<Contact[]> {
    return await this.prisma.contact.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(id: string): Promise<Contact> {
    return await this.prisma.contact.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<Contact> {
    return await this.prisma.contact.findUnique({
      where: { email },
    });
  }

  async update(data: UpdateContactDto, id: string): Promise<Contact> {
    return await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });
  }

  async block(id: string): Promise<string> {
    const isBlocked = await this.prisma.contact
      .findUnique({
        where: { id },
      })
      .then((res) => res.isBlocked);

    await this.prisma.contact.update({
      where: { id },
      data: {
        isBlocked: !isBlocked,
      },
    });

    if (isBlocked) {
      return 'User unblocked';
    }
    if (!isBlocked) {
      return 'User blocked';
    }
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
