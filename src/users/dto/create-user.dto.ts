export class CreateUserDto {
    username: string;
    password: string;
    role: string;
    companyId: string; // Assuming you have a Company entity
  }