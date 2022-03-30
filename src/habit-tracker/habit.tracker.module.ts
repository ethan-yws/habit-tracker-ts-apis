import { Logger, Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { HabitService } from './service/habit.service';
import { UserService } from './service/user.service';

@Module({
  controllers: [AppController],
  providers: [UserService, Logger, HabitService],
  exports: [UserService, HabitService],
})
export class HabitTrackerModule {}
