import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto, SignInDto, CreateHabitDto } from '../dto';
import { CreateUserResponse } from '../interface';
import { HabitService } from '../service/habit.service';
import { UserService } from '../service/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly habitService: HabitService,
  ) {}

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

  @Post('/habits/create')
  @HttpCode(204)
  async createHabit(@Body() habitPayload: CreateHabitDto): Promise<void> {
    await this.habitService.createHabit(habitPayload);
  }
}
