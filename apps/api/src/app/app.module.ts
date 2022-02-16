import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { RandomController } from './random/controller/random.controller';
import { AppService } from './app.service';
import { RandomService } from './random/service/random.service';

@Module({
  imports: [],
  controllers: [AppController, RandomController],
  providers: [AppService, RandomService],
})
export class AppModule {}
