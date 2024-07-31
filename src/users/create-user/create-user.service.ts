import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
      async create(dto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 10); // Hash the password with a salt round of 10
        const user = this.usersRepository.save({ username: dto.username , password: hashedPassword, role: 'user' });
        return user
      }
    }
    

