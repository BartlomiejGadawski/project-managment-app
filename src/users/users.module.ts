import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { DeleteUserService } from './delete-user/delete-user.service';
import { FindUserService } from './find-user/find-user.service';
import { UpdateUserService } from './update-user/update-user.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [CreateUserService, DeleteUserService, FindUserService, UpdateUserService],
  controllers: [UsersController]
})
export class UsersModule {


}
