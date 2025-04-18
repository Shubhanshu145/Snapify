import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Photo } from './photo.model';


@Table
export class User extends Model {
  @Column email: string;
  @Column password: string;
  @Column name: string;
  @Column role:string;
  @HasMany(() => Photo)
  photos: Photo[];
}