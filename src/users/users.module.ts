import * as path from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
// import { UsersEntity } from './users.entity';

@Module({
  imports: [
    // todo make env var
    // TypeOrmModule.forFeature([UsersEntity]),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost/mussia12',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
