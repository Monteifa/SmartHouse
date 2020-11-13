import { Entity, ObjectIdColumn, Column } from 'typeorm';
import Room from './Room';

@Entity()
export default class House {
  @ObjectIdColumn()
  _id: number;

  @Column()
  name: string;

  @Column((type) => Room)
  rooms: Room[];
}
