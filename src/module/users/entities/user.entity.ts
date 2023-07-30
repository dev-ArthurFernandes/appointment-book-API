import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;

  firstName: string;

  lastName: string;

  email: string;

  recoveryEmail: string;

  @Exclude()
  password: string;

  phone1: string;

  phone2: string;

  avatarURL: string;

  addedAt: string;

  deletedAt: string | null;

  constructor() {
    this.id = randomUUID();
    this.addedAt = Date();
    this.deletedAt = null;
  }
}
