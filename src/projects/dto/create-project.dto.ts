import { Risk } from "src/entity/risks.entity";

export class CreateProjectDto {
  projectNumber: string;
  projectName: string;
  description: string;
  startDate: Date;
  realizationDate: Date;
  deadlineDate: Date;
  estimatedBudget: number;
  actualBudget: number;
  currency: string;
  typeOfProject: string;
  projectManager: string;
  status: string;
  priority: string;
  risks: Risk[];
    resources: {
    resourceName: string;
    resourceType: string;
    allocatedHours: number;
    cost: number;
    assignedDate: Date;
  }[];
  comment: string;
}