import { Controller, Get, UseGuards } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { Op } from 'sequelize';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Photo } from 'src/users/photo.model';
import { User } from 'src/users/users.model';
import { fn, literal } from 'sequelize';
import { StatusGuard } from 'src/common/guards/status.guard';


@Controller('admin')
@UseGuards(JwtAuthGuard) 
export class AdminController {
  constructor(
    @InjectModel(Photo) private photoModel: typeof Photo,
    @InjectModel(User) private userModel: typeof User,
  ) {}

  @Get('stats')
  async getStats() {
    const totalUploads = await this.photoModel.count();
    
    const [mostActive] = await this.photoModel.findAll({
        attributes: ['userId', [fn('COUNT', '*'), 'count']],
        group: ['userId'],
        order: [[literal('count'), 'DESC']],
        limit: 1,
      });
      

    const largestPhoto = await this.photoModel.findOne({ order: [['size', 'DESC']] });

    return {
      totalUploads,
      mostActiveUploader: mostActive,
      largestPhoto,
    };
  }
}