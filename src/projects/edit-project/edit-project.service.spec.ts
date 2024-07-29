import { Test, TestingModule } from '@nestjs/testing';
import { EditProjectService } from './edit-project.service';

describe('EditProjectService', () => {
  let service: EditProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditProjectService],
    }).compile();

    service = module.get<EditProjectService>(EditProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
