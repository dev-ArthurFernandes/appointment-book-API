import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create(data: any) {
    return 'User Create';
  }

  findAll() {
    return 'Users Find';
  }

  findOne(id: string) {
    return 'User Find';
  }
}
