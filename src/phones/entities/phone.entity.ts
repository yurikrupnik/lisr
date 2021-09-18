import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryColumn()
  name: string;

  @Column()
  year: number;
}
