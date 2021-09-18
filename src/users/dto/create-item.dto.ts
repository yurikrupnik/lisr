// import { UserRoles } from '@mussia12/shared/data-types';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  isString,
} from 'class-validator';
// import { User } from '../users.schema';
import { ApiProperty } from '@nestjs/swagger';

// todo check and add to logic coz it is needed
// export class CreateDto extends User {
// readonly name: string;
// readonly image?: string;
// readonly lastName?: string;
// readonly firstName?: string;
// readonly email: string;
// readonly password?: string;
// readonly role?: UserRoles;
// readonly isActive?: boolean;
// }

export class UpdateDto {
  // @isString({})
  @Length(10, 20)
  @ApiProperty({
    description: `Users name`,
    example: 'aris',
    // readOnly: true,
    minimum: 3,
    maxLength: 20,
  })
  name: string;
}
export class HelloDto {
  @ApiProperty({
    description: `Users name`,
    example: 'aris',
    readOnly: true,
  })
  readonly name?: string;
}
