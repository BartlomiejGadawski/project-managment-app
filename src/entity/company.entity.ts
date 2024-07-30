import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Project } from './project.entity';
import { User } from './user.entity';
import { Client } from './client.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @OneToMany(() => Project, (project) => project.company)
  projects: Project[];

  @OneToMany(() => Client, (client) => client.company)
  clients: Client[];
}