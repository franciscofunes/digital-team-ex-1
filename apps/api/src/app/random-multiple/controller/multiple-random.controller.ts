import { Body, Controller, Post } from '@nestjs/common';

import { MultipleRandomNumber } from '@digital-team-exercise/api-interfaces';

import { MultipleRandomService } from '../service/multiple-random.service';

@Controller()
export class MultipleRandomController {
  constructor(private readonly multipleRandomService: MultipleRandomService) {}

  @Post('create-multiple')
  getData(@Body('number') number): MultipleRandomNumber {
    return this.multipleRandomService.createMultipleRandomNumber(number);
  }
}
