import { Injectable } from '@nestjs/common';
import { Message } from '@digital-team-exercise/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
