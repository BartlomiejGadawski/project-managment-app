import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entity/project.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async findAll(user: User): Promise<Project[]> {
    return this.projectsRepository.find({ where: { company: user.company } });
  }

  async findOne(id: string, user: User): Promise<Project> {
    return this.projectsRepository.findOne({ where: { id, company: user.company } });
  }
}
