import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export default class House {
  @ObjectIdColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  rooms: [
    {
      name: string;
      dimensions?: {
        height?: number;
        width?: number;
        depth?: number;
      };
      devices?: [
        { name: string; type: number | boolean; status: number | boolean }
      ];
    }
  ];
}
