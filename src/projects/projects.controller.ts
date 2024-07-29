import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateProjectService } from './create-project/create-project.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly createProjectService: CreateProjectService) {}

    @Post('/create-project')
    createProjet(@Body() dto: CreateProjectDto): any {
      return this.createProjectService.createProject(dto);
    }


}
