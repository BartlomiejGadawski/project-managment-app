import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
 
    @Post('/create-project')
    createProjet(@Body() dto: CreateProjectDto): any {
      return dto;
    }


}
