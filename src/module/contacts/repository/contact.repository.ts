import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact>;

  abstract findAll(userId: string): Promise<Contact[]>;

  abstract findOne(id: string): Promise<Contact>;

  abstract findByEmail(email: string): Promise<Contact>;

  abstract update(data: UpdateContactDto, id: string): Promise<Contact>;

  abstract block(id: string): Promise<string>;

  abstract delete(id: string): Promise<void>;
}
