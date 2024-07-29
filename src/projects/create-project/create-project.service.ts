import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entity/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';

@Injectable()
export class CreateProjectService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = this.projectsRepository.create(createProjectDto);
    return this.projectsRepository.save(newProject);
  }
}
