import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'user_id' })
  userId: string;

  @Column({ type: 'varchar', name: 'user_name' })
  userName: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @Column({ type: 'varchar', name: 'picture' })
  avatarUrl: string;

  @Column({ type: 'timestamp', name: 'cre_dt' })
  createdDate: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'upt_dt' })
  updatedDate: Date;
}
