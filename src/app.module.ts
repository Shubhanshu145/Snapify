import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { User } from './users/users.model';
import { Photo } from './users/photo.model';
import { PhotosModule } from './photos/photos.module';
import { AdminModule } from './admin/admin.module';
import configuration from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: '.env',
    load: [configuration]
  }),
  SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.host,
  port: 5432,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  models: [User, Photo],
  autoLoadModels: true,
  synchronize: true,
})
  
  , AuthModule,AuthModule,
  AdminModule,
  PhotosModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'snapify',
  models: [User, Photo],
  autoLoadModels: true,
  synchronize: true,
})