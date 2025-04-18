import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';


import { Photo } from 'src/users/photo.model';
import { User } from 'src/users/users.model';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';



@Module({
  imports: [SequelizeModule.forFeature([Photo, User])],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}