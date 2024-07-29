import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Check } from 'typeorm';
import { Project } from './project.entity';
import { Milestone } from './milestone.entity';

@Entity()
@Check(`status IN ('Planned', 'InProgress', 'Completed', 'OnHold', 'Cancelled')`)
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taskName: string;

  @Column()
  assignedTo: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column('text')
  description: string;

  @Column()
  status: string;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;

  @Column('simple-array')
  dependencies: number[]; // ID zależnych zadań

  @ManyToOne(()=> Milestone, (milestone) => milestone.id)
  milestone: Milestone;
}