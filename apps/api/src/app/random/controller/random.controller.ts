import { Controller, Get } from '@nestjs/common';

import { RandomNumber } from '@digital-team-exercise/api-interfaces';

import { RandomService } from '../service/random.service';

@Controller()
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Get('random')
  getData(): RandomNumber {
    return this.randomService.getRandomNumber();
  }
}
