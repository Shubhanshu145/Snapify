import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from './users.model';


@Table
export class Photo extends Model {
  @Column fileName: string;
  @Column size: number;
  @Column path: string;
  
  @Column caption: string;

  @ForeignKey(() => User)
  @Column userId: number;
}
