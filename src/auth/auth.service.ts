import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto, res: Response) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);

    res.cookie('jwt', token, { httpOnly: true, secure: true });

    return {
      message: 'Login successful',
    };
  }

  async logout(res: Response) {
    res.clearCookie('jwt');
    return {
      message: 'Logout successful',
    };
  }
}