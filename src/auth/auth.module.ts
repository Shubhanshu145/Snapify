import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User } from 'src/users/users.model';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[SequelizeModule.forFeature([User]),
  PassportModule,
  JwtModule.register({ secret: 'secretKey', signOptions: { expiresIn: '1d' } })],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
