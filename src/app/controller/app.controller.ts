import { Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserResponse } from '../interface';

@Controller()
export class AppController {
  constructor() {}

  @Post('/signup')
  @HttpCode(200)
  async createNewUser(): Promise<CreateUserResponse> {
    return null;
  }
}
