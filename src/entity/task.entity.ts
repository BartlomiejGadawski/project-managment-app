import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Check, ManyToMany, JoinTable } from 'typeorm';
import { Project } from './project.entity';
import { Milestone } from './milestone.entity';
import { User } from './user.entity';
import { DependencyType } from 'src/enums/dependency-type.enum';

@Entity()
@Check(`status IN ('Planned', 'InProgress', 'Completed', 'OnHold', 'Cancelled')`)
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  taskName: string;

  @ManyToMany(() => User, (user)=>user.id)
  @JoinTable() // Tabela pośrednia dla zależności
  assignedTo: User[]

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


  @ManyToMany(() => Task, (task) => task.dependentTasks)
  @JoinTable()
  dependencies: Task[];

  @ManyToMany(() => Task, (task) => task.dependencies)
  dependentTasks: Task[];
  
  @Column('simple-array')
  dependencyTypes: DependencyType[]; // Typy zależności dla każdego zadania


  @ManyToOne(()=> Milestone, (milestone) => milestone.id)
  milestone: Milestone;
}