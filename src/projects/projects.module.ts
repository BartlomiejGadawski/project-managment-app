import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { CreateProjectService } from './create-project/create-project.service';
import { EditProjectService } from './edit-project/edit-project.service';
import { DeleteProjectService } from './delete-project/delete-project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entity/project.entity';
import { Resource } from 'src/entity/resource.entity';
import { Task } from 'src/entity/task.entity';
import { Milestone } from 'src/entity/milestone.entity';

@Module({ 
  
  
  imports: [TypeOrmModule.forFeature([Project, Resource, Task, Milestone])],
  providers: [ProjectsService, CreateProjectService, EditProjectService, DeleteProjectService],
  controllers: [ProjectsController],
  exports: [ProjectsService]
})
export class ProjectsModule {





}




