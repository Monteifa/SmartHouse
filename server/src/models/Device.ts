import { Column } from 'typeorm';

export default class Device {
  @Column()
  name: string;

  @Column()
  status: boolean;
}
