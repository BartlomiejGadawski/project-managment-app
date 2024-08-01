import { Controller, Post, UseGuards, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req: LoginDto, @Response() res) {
    return this.authService.login(req, res);
  }
}
