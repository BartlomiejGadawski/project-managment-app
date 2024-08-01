import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [

    TypeOrmModule.forFeature([User]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Replace with your own secret key
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtService, JwtStrategy ],
  controllers: [AuthController],
  exports: [AuthService, JwtStrategy],

})
export class AuthModule {}
