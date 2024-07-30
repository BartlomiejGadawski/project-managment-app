import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from './company.entity';
import { Project } from './project.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adress: string;

  @Column()
  phoneNumber: string;

  @Column()
  Country: string;

  @Column()
  zipCode: string;

  @Column()
  comment: string;

  @ManyToOne(() => Company, (company) => company.clients, { onDelete: 'CASCADE' })
  company: Company;

  @OneToMany(() => Project, (project) => project.client)
  projects: Project[];
}
