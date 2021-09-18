import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

type UserRoles = 'viewer' | 'editor' | 'finance' | 'admin';
const userRoles = ['viewer', 'editor', 'finance', 'admin'];

enum Roles {
  viewer = 'viewer',
  editor = 'editor',
  finance = 'finance',
  admin = 'admin',
}

type LoginProviders = 'local' | 'google' | 'github';
const loginProviders = ['local', 'google', 'github'];

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({
    description: `User id`,
    example: 'some id',
    // readOnly: true,
    required: false,
  })
  readonly _id?: string;
  @ApiProperty({
    description: `A list of user's roles`,
    example: 'admin',
    readOnly: true,
  })
  @Prop()
  name: string;

  @ApiProperty({
    description: `A list of user's roles`,
    example: userRoles[1],
    // readOnly: true,
    required: false,
    enum: Roles,
  })
  @Prop({ type: String, enum: userRoles, default: userRoles[0] })
  role: UserRoles;
  //
  @Prop({
    index: true,
    required: true,
  })
  @ApiProperty({
    description: `User email`,
    example: 'a@a.com',
    // readOnly: true,
    required: true,
  })
  email: string;

  @Prop({ index: true })
  @ApiProperty({
    description: `Users password`,
    example: '123456',
    // readOnly: true,
    required: false,
  })
  password: string;

  @Prop({ type: String, enum: loginProviders, default: loginProviders[0] })
  provider: LoginProviders;
}

export const UserSchema = SchemaFactory.createForClass(User);
