import { Controller, Post, UseGuards, UploadedFile, UseInterceptors, Body, Request, Get, Query, Param, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { PhotosService } from './photos.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('photos')
@UseGuards(JwtAuthGuard)
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Post('upload')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('image'))
  upload(@UploadedFile() file: Express.Multer.File, @Body('caption') caption: string, @Request() req) {
    
    return this.photosService.uploadPhoto(file, caption, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getUserPhotos(@Request() req, @Query('page') page: number, @Query('limit') limit: number) {
    return this.photosService.getUserPhotos(req.user.id, page, limit);
  }

  @Get(':id')
  getPhoto(@Param('id') id: number) {
    return this.photosService.getPhoto(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deletePhoto(@Param('id') id: number, @Request() req) {
    console.log(id)
    console.log(req.user.id)
    return this.photosService.deletePhoto(id, req.user.id);
  }
}