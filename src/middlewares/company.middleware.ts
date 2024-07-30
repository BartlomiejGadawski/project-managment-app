import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User } from 'src/entity/user.entity';
import { ProjectsService } from 'src/projects/projects.service';


interface AuthenticatedRequest extends Request {
  user?: User;
}

@Injectable()
export class CompanyMiddleware implements NestMiddleware {
  constructor(private readonly projectsService: ProjectsService) {}

  async use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const user = req.user; // Assuming user is added to request object by auth middleware
    const projectId = req.params.id;

    if (!user) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const project = await this.projectsService.findOne(projectId, user);

    if (project.company.id !== user.company.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  }
}