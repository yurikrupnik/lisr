import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  // Query,
  Param,
  Query,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiQueryOptions,
  ApiQuery,
  ApiBasicAuth,
  ApiForbiddenResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { UsersService } from './users.service';
// import { HelloDto, UpdateDto } from './dto/create-item.dto';
// import { User } from '../schemas/user';
// import { User } from './users.schema';
// import { UsersEntity } from './users.entity';
import { User } from './users.schema';
// import { User } from '@mussia12/shared/data-types';

// const obj: User = {
//   name: 'as',
//   email: '12@sa.com',
//   password: '23123',
//   _id: '2',
// };

// type Users = User[];

enum prjects {
  'arus',
  'shit',
}

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOkResponse({
    description: 'The resource has been successfully returned',
    type: User,
    isArray: true,
    // schema: Users,
  })
  @ApiOperation({ description: 'Create some resource' })
  @ApiQuery({
    description: 'some query',
    name: 'limit',
    required: false,
  })
  @ApiQuery({
    description: 'some query',
    name: 'projection',
    required: false,
    isArray: true,
    enum: prjects,
  })
  @ApiQuery({
    description: 'stam tems',
    name: 'stam',
    required: false,
    enum: prjects,
  })
  getData(
    @Query('projection') projection: string | [string] | null,
    @Query('limit') limit: string,
    @Query('page') page: string,
  ) {
    const skip = Number(limit) * Number(page) || Number(limit);
    return this.usersService.findAll({}, projection, {
      limit: Number(limit),
      skip: Number(skip),
    });
  }

  // @Get(':id')
  // @ApiOkResponse({
  //   description: 'The resource has been successfully returned',
  // })
  // findOne(@Query('projection') projection, @Param('id') id: string) {
  //   return this.usersService.findOne(id, projection);
  // }

  // @Put(':id')
  // @ApiOkResponse({
  //   description: 'The resource has been successfully updated',
  //   type: UsersEntity,
  // })
  // @ApiForbiddenResponse({ description: 'Not allowed' })
  // update(@Body() body: UpdateDto, @Param('id') id): Promise<User> {
  //   return this.usersService.update(id, body);
  // }
  //
  @Post()
  // @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'The resource has been successfully created',
    type: User,
  })
  // @ApiResponse({
  //   status: 201,
  //   // schema: PartialType(User),
  // })
  post(@Body() User: User): Promise<User> {
    // console.log('createItemDto', User);
    return this.usersService.create(User);
  }
  //
  // @Delete(':id')
  // // @ApiParam({
  // //   description: 'do it',
  // //   type: String,
  // //   example: '1234',
  // //   required: false,
  // // })
  // @ApiCreatedResponse({
  //   description: 'The resource has been successfully deleted',
  //   type: String,
  // })
  // @ApiOperation({ description: 'Delete resource by id' })
  // delete(@Param('id') id?: string): Promise<string> {
  //   return this.usersService.delete(id);
  // }
}
