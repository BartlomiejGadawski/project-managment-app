import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resourceName: string;

  @Column()
  resourceType: string;

  @Column('float')
  allocatedHours: number;

  @Column('float')
  cost: number;

  @Column()
  assignedDate: Date;

  @ManyToOne(() => Project, (project) => project.resources)
  project: Project;
}
