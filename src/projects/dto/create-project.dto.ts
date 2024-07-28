
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
  client: string;
  projectManager: string; // Menedżer projektu
  status: ProjectStatus; // Status projektu (np. Planned, In Progress, Completed)
  priority: Priority; // Priorytet projektu (np. High, Medium, Low)
//  stakeholders: string[]; // Lista interesariuszy
  risks: string[]; // Lista ryzyk związanych z projektem
  //     milestones: { milestoneName: string; dueDate: Date }[]; // Kamienie milowe
  resources: Resource[]; // Zasoby przypisane do projektu
  //    tasks: { taskName: string; assignedTo: string; dueDate: Date; status: string }[]; // Zadania w projekcie
  comments: string[]; // Komentarze dotyczące projektu
}

export class Resource {
  resourceName: string;
  resourceType: string;
  allocatedHours: number; // Ilość przydzielonych godzin
  cost: number; // Koszt zasobu
  assignedDate: Date; // Data przypisania zasobu do projektu
}

export enum Priority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export enum ProjectStatus {
    Planned = 'Planned',
    InProgress = 'InProgress',
    Completed = 'Completed',
    OnHold = 'OnHold',
    Cancelled = 'Cancelled'
}
