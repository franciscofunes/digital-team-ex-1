import { Injectable } from '@nestjs/common';
import {
  MultipleRandomNumber,
  RandomNumber,
} from '@digital-team-exercise/api-interfaces';

@Injectable()
export class RandomService {
  getRandomNumber(): RandomNumber {
    return { randomNumber: Math.floor(Math.random() * 100) + 1 };
  }

  getRandomMultiple(factorial): MultipleRandomNumber {
    const min = 1;
    const max = 100;
    return {
      multipleRandomNumber:
        Math.floor(Math.random() * (max - min + 1) + min) * factorial,
    };
  }
}
