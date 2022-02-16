import { Injectable } from '@nestjs/common';
import { RandomNumber } from '@digital-team-exercise/api-interfaces';

@Injectable()
export class RandomService {
  getRandomNumber(): RandomNumber {
    return { randomNumber: Math.floor(Math.random() * 100) + 1 };
  }
}
