import { Injectable, Logger } from '@nestjs/common';
import { CreateHabitDto } from '../dto';
import { HabitEntity } from '../entity/habit.entity';

@Injectable()
export class HabitService {
  constructor(private readonly loggerService: Logger) {}

  async createHabit(params: CreateHabitDto): Promise<void> {
    const { title, description, tag, targetNumber, themeColor, userId } =
      params;

    const newHabit: Partial<HabitEntity> = {
      title,
      description,
      tag,
      doneCounter: 0,
      targetNumber,
      themeColor,
      userId,
    };

    await HabitEntity.insert(newHabit);
    this.loggerService.debug(
      `habitService :: createHabit :: successful created habit item`,
    );
  }
}
