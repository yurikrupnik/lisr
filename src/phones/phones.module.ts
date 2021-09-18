import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Phone]),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      host: 'localhost',
      // host: process.env.MONGO_URI || 'mongodb://localhost/mussia12',
      port: 27017,
      database: 'test',
      useNewUrlParser: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      migrations: [],
      // entities: [UsersEntity],
      // entities: [path.join(__dirname, '**/**.entity{.ts,.js}')],
      // username: 'a@a.com',
      // password: '123456',
    }),
  ],
  controllers: [PhonesController],
  providers: [PhonesService],
})
export class PhonesModule {}
