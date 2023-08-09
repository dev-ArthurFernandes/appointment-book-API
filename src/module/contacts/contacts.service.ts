import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repository/contact.repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}

  emailExists = async (email: string) => {
    const contact = await this.contactRepository.findByEmail(email);

    return !!contact;
  };

  findContact = async (id: string) => {
    const contact = await this.contactRepository.findOne(id);

    return !!contact;
  };

  async create(data: CreateContactDto, id: string) {
    if (await this.emailExists(data.email)) {
      throw new ConflictException('Email already registered!');
    }

    if (await this.emailExists(data.email2)) {
      throw new ConflictException('Email already registered!');
    }

    return await this.contactRepository.create(data, id);
  }

  async findAll(userId: string) {
    return await this.contactRepository.findAll(userId);
  }

  async findOne(id: string) {
    if (!(await this.findContact(id))) {
      throw new NotFoundException('Contact not found!');
    }

    return await this.contactRepository.findOne(id);
  }

  async update(id: string, data: UpdateContactDto) {
    if (!(await this.findContact(id))) {
      throw new NotFoundException('Contact not found!');
    }

    return await this.contactRepository.update(data, id);
  }

  async block(id: string) {
    if (!(await this.findContact(id))) {
      throw new NotFoundException('Contact not found!');
    }

    return await this.contactRepository.block(id);
  }

  async remove(id: string) {
    if (!(await this.findContact(id))) {
      throw new NotFoundException('Contact not found!');
    }

    return await this.contactRepository.delete(id);
  }
}
