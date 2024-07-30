import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Check, ManyToOne } from 'typeorm';
import { Resource } from './resource.entity';
import { Task } from './task.entity';
import { Milestone } from './milestone.entity';
import { Company } from './company.entity';
import { Risk } from './risks.entity';
import { Client } from './client.entity';

@Entity()
@Check(`status IN ('Planned', 'InProgress', 'Completed', 'OnHold', 'Cancelled')`)
@Check(`priority IN ('Low', 'Medium', 'High')`)
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
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
  projectManager: string;

  @Column()
  status: string;

  @Column()
  priority: string;

  @OneToMany(() => Risk, (risk) => risk.project, { cascade: true })
  risks: Risk[];

  @OneToMany(() => Resource, (resource) => resource.project, { cascade: true })
  resources: Resource[];

  @ManyToOne(() => Client, (client) => client.projects)
  client: Client;

  @Column('text')
  comment: string;

  @Column('float', { default: 0 })
  progress: number; // Postęp projektu w procentach

  @OneToMany(() => Task, (task) => task.project, { cascade: true })
  tasks: Task[];

  @OneToMany(() => Milestone, (milestone) => milestone.project, { cascade: true })
  milestones: Milestone[];

  // @Column({ nullable: true })
  // teamMembers: string; // UUID listy danego zespolu Lista członków zespołu

  @ManyToOne(() => Company, (company) => company.projects)
  company: Company;

  @Column({default: ()=> 'CURRENT_TIMESTAMP'})
  createAtTimestamp: string;
}
