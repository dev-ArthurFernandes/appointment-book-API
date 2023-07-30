import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;

  firstName: string;

  lastName?: string;

  email: string;

  email2?: string;

  phone1: string;

  phone2?: string;

  avatarURL?: string;

  isBlocked: boolean;

  userId: string;

  constructor() {
    this.id = randomUUID();
    this.isBlocked = false;
  }
}
