import { Column } from 'typeorm';
import Device from './Device';

export default class Room {
  @Column()
  name: string;

  @Column()
  dimensions?: {
    height?: number;
    width?: number;
    depth?: number;
  };

  @Column((type) => Device)
  devices?: Device[];
}
