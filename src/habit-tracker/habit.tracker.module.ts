import { Logger, Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [AppController],
  providers: [UserService, Logger],
  exports: [UserService],
})
export class HabitTrackerModule {}
