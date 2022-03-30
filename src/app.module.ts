import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HabitTrackerModule } from './habit-tracker/habit.tracker.module';
import { UserEntity } from './habit-tracker/entity/user.entity';
import { HabitEntity } from './habit-tracker/entity/habit.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        schema: configService.get<string>('DATABASE_SCHEMA'),
        host: configService.get<string>('DATABASE_URL'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [UserEntity, HabitEntity],
        synchronize: false,
        ssl: { rejectUnauthorized: false },
      }),
      inject: [ConfigService],
    }),
    HabitTrackerModule,
  ],
})
export class AppModule {}
