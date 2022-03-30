import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('habits')
export class HabitEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'description', nullable: true })
  description: string;

  @Column({ type: 'varchar', name: 'tag', nullable: true })
  tag: string;

  @Column({ type: 'integer', name: 'done_counter' })
  doneCounter: number;

  @Column({ type: 'integer', name: 'target_number' })
  targetNumber: number;

  @Column({ type: 'varchar', length: 50, name: 'theme_color' })
  themeColor: string;

  // @Column({ type: 'timestamp', name: 'cre_dt' })
  // createdDate: Date;

  // @Column({ type: 'timestamp', nullable: true, name: 'upt_at' })
  // updatedDate: Date;

  @Column({ type: 'varchar', name: 'user_id' })
  userId: string;
}
