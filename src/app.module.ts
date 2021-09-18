import { Module } from '@nestjs/common';
// import * as path from 'path';
import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   name: 'default',
    //   type: 'mongodb',
    //   host: 'localhost',
    //   synchronize: true, // todo remove in production
    //   // host: process.env.MONGO_URI || 'mongodb://localhost/mussia12',
    //   port: 27017,
    //   database: 'test',
    //   useNewUrlParser: true,
    //   autoLoadEntities: true,
    //   useUnifiedTopology: true,
    //   // entities: [UsersEntity],
    //   // entities: ['src/**/**.entity{.ts,.js}'],
    //   entities: [path.join(__dirname, '**/**.entity{.ts,.js}')],
    //   cli: {
    //     entitiesDir: path.join(__dirname, '**/**.entity{.ts,.js}'),
    //   },
    //   // username: 'a@a.com',
    //   // password: '123456',
    // }),
    UsersModule,

    // PhonesModule,
  ],
  // controllers: [UsersController],
  // providers: [UsersService],
})
export class AppModule {}
