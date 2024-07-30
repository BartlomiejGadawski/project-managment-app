import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Project } from './project.entity';
import { Task } from './task.entity';


@Entity()
export class Milestone {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  milestoneName: string;

  @Column()
  dueDate: Date;

  @Column('text')
  description: string;

  @ManyToOne(() => Project, (project) => project.milestones)
  project: Project;

  @OneToMany(()=> Task, (task)=> task.id)
  task: Task;

}