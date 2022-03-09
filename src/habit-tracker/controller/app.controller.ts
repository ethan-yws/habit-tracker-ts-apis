import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.user.dto';
import { SignInDto } from '../dto/signin.dto';
import { CreateUserResponse } from '../interface';
import { UserService } from '../service/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  @HttpCode(200)
  async createNewUser(
    @Body() userInfo: CreateUserDto,
  ): Promise<CreateUserResponse> {
    const userId: string = await this.userService.registerUser(userInfo);

    return {
      userId,
    };
  }

  @Get('/signin')
  @HttpCode(200)
  async signInUser(@Body() userInfo: SignInDto): Promise<boolean> {
    return await this.userService.signIn(userInfo);
  }
}
