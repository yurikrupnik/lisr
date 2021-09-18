import { Controller } from '@nestjs/common';

import { Crud, CrudController } from '@nestjsx/crud';
import { Phone } from './entities/phone.entity';
import { PhonesService } from './phones.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Phone,
  },
})
@Controller('phones')
@ApiTags('Phones')
export class PhonesController implements CrudController<Phone> {
  constructor(public service: PhonesService) {}
}
