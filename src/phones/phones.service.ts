import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Phone } from './entities/phone.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhonesService extends TypeOrmCrudService<Phone> {
  constructor(@InjectRepository(Phone) repo) {
    super(repo);
  }
}
