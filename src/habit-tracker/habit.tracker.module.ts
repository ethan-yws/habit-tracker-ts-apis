import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [AppController],
  providers: [UserService],
  exports: [UserService],
})
export class HabitTrackerModule {}
