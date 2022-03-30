import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HabitService {
  constructor(private readonly loggerService: Logger) {}

  async createHabit() {}
}
