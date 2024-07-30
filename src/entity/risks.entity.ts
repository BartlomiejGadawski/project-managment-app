import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Risk {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  severity: string;

  @Column({ type: 'varchar', length: 50 })
  probability: string;

  @ManyToOne(() => Project, (project) => project.risks, { onDelete: 'CASCADE' })
  project: Project;
}
