import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string; // 'admin' or 'user'

  @ManyToOne(() => Company, company => company.users)
  company: Company;
}
