import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProjectService } from './delete-project.service';

describe('DeleteProjectService', () => {
  let service: DeleteProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteProjectService],
    }).compile();

    service = module.get<DeleteProjectService>(DeleteProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
