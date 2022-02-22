import { Controller, Get, Param } from '@nestjs/common';

import {
  MultipleRandomNumber,
  RandomNumber,
} from '@digital-team-exercise/api-interfaces';

import { RandomService } from '../service/random.service';
import { ApiParam } from '@nestjs/swagger';

@Controller('random')
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Get('number')
  getRandomNumber(): RandomNumber {
    return this.randomService.getRandomNumber();
  }

  @Get('multiple/:number')
  @ApiParam({
    name: 'number',
    required: true,
    description:
      'Add a number to generate a random multiple of that number. Example: /random/multiple/5',
    schema: { oneOf: [{ type: 'integer' }] },
  })
  getRandomMultiple(@Param('number') params): MultipleRandomNumber {
    return this.randomService.getRandomMultiple(params);
  }
}
