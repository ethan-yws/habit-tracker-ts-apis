export class CreateHabitDto {
  title: string;
  description?: string;
  tag?: string;
  targetNumber: number;
  themeColor: string;
  userId: string;
}
