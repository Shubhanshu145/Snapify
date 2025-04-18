import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Express } from 'express';
import { User } from 'src/users/users.model';
import { v2 as cloudinary } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { Photo } from 'src/users/photo.model';


cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret:process.env.api_secret,
});

@Injectable()
export class PhotosService {
  constructor(@InjectModel(Photo) private photoModel: typeof Photo) {}

  async uploadPhoto(file: Express.Multer.File, caption: string, userId: number) {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'snapify' },
      async (error, result) => {
        if (result) {
          await this.photoModel.create({
            fileName: file.originalname,
            size: file.size,
            path: result.secure_url,
            caption,
            userId,
          });
        }
      },
    );
    toStream(file.buffer).pipe(stream);
  }

  async getUserPhotos(userId: number, page = 1, limit = 10) {
    return this.photoModel.findAll({
      where: { userId },
      offset: (page - 1) * limit,
      limit,
    });
  }

  async getPhoto(id: number) {
    return this.photoModel.findByPk(id);
  }

  async deletePhoto(id: number, userId: number) {
    const photo = await this.photoModel.findByPk(id);
  
    if (!photo || photo.userId !== userId) {
      throw new ForbiddenException('You do not have permission to delete this photo');
    }
    
    await photo.destroy();
  
    return { message: 'Photo deleted successfully' };
  }
  
}