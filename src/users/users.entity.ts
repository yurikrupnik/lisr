import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  PrimaryColumn,
  ObjectID,
} from 'typeorm';

@Entity('user')
export class UsersEntity {
  @ObjectIdColumn()
  // @Column({ primary: true })
  // @Column('text', { nullable: true })
  id: ObjectID;

  @Column({})
  name: string;

  @Column({ primary: true })
  email: string;
}
