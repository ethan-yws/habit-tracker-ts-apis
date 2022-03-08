import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.user.dto';
import { UserEntity } from '../entity/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor() {}

  async registerUser(params: CreateUserDto): Promise<string> {
    const { userName, password, email, avatarUrl } = params;

    const userInfo: Partial<UserEntity> = {
      userId: uuid(),
      userName,
      password,
      email,
      avatarUrl,
    };

    const res = await UserEntity.insert(userInfo);
    return userInfo.userId;
  }
}
