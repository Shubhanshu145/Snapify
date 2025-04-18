import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';

import * as bcrypt from 'bcrypt';
import { NotFoundError } from 'rxjs';
import { loginDto } from 'src/DTO/login.dto';
import { signupDto } from 'src/DTO/signup.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async register(dto: signupDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({ ...dto, password: hash });
    
    return user;
  }

  async login(dto: loginDto) {
    console.log(dto);
    const user = await this.userModel.findOne({where:{email:dto.email}, attributes:['password','id']});
    if(!user)
            throw new NotFoundException("User Not Found")
    console.log(user)
    
    if (!user || !(await bcrypt.compare(dto.password, user.dataValues.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const token = this.jwtService.sign({ id: user.id }, { secret: '123' });
    return { token };
  }

  async getProfile(id: number) {
    return this.userModel.findByPk(id);
  }
}