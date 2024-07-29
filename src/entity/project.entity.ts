import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Check } from 'typeorm';
import { Resource } from './resource.entity';
import { Task } from './task.entity';
import { Milestone } from './milestone.entity';

@Entity()
@Check(`status IN ('Planned', 'InProgress', 'Completed', 'OnHold', 'Cancelled')`)
@Check(`priority IN ('Low', 'Medium', 'High')`)
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectNumber: string;

  @Column()
  projectName: string;

  @Column('text')
  description: string;

  @Column()
  startDate: Date;

  @Column()
  realizationDate: Date;

  @Column()
  deadlineDate: Date;

  @Column('float')
  estimatedBudget: number;

  @Column('float')
  actualBudget: number;

  @Column()
  currency: string;

  @Column()
  typeOfProject: string;

  @Column()
  client: string;

  @Column()
  projectManager: string;

  @Column()
  status: string;

  @Column()
  priority: string;

  @Column('simple-array')
  risks: string[];

  @OneToMany(() => Resource, (resource) => resource.project, { cascade: true })
  resources: Resource[];

  @Column('text')
  comment: string;

  @Column('float', { default: 0 })
  progress: number; // Postęp projektu w procentach

  @OneToMany(() => Task, (task) => task.project, { cascade: true })
  tasks: Task[];

  @OneToMany(() => Milestone, (milestone) => milestone.project, { cascade: true })
  milestones: Milestone[];

  @Column('simple-array' ,{ nullable: true })
  teamMembers: string[]; // Lista członków zespołu

  @Column({default: ()=> 'CURRENT_TIMESTAMP'})
  createAtTimestamp: string;
}
