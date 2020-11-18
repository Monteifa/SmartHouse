import { Column } from 'typeorm';
import Device from './Device';

export default class Room {
  @Column()
  name: string;

  @Column((type) => Device)
  devices?: Device[];

  @Column()
  icon: string;
}
