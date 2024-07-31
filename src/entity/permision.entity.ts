import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string; // e.g., 'CREATE_PROJECT', 'VIEW_PROJECT'
}