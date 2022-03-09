import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.user.dto';
import { UserEntity } from '../entity/user.entity';
import { v4 as uuid } from 'uuid';
import { SignInDto } from '../dto/signin.dto';

@Injectable()
export class UserService {
  // constructor() {}

  /**
   * Sign up a new user
   * @param {CreateUserDto} params
   * @returns {string} userId
   */
  async registerUser(params: CreateUserDto): Promise<string> {
    const { userName, password, email, avatarUrl } = params;

    const userInfo: Partial<UserEntity> = {
      userId: uuid(),
      userName,
      password,
      email,
      avatarUrl,
    };

    await UserEntity.insert(userInfo);
    return userInfo.userId;
  }

  /**
   * Sign in a user
   * @param {SignInDto} params
   * @returns {boolean} signin successful state
   */
  async signIn(params: SignInDto): Promise<boolean> {
    const { email, password } = params;
    const user = await UserEntity.findOne({
      email,
      password,
    });

    console.log(user);
    return user === undefined ? false : true;
  }
}
