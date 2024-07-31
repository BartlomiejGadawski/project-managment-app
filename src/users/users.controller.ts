import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserService } from './create-user/create-user.service';


@Controller('users')
export class UsersController {
    constructor(private readonly createUserService: CreateUserService) {}


    @Post('/create-user')
    create(@Body() createUserDto: CreateUserDto) {
      return this.createUserService.create(createUserDto);
    }
  

}
