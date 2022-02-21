import { Injectable } from '@nestjs/common';
import { MultipleRandomNumber } from '@digital-team-exercise/api-interfaces';

@Injectable()
export class MultipleRandomService {
  createMultipleRandomNumber(factorial): MultipleRandomNumber {
    return {
      multipleRandomNumber: Math.floor(Math.random() * 100) * factorial,
    };
  }
}
