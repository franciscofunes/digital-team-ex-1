import { Module } from '@nestjs/common';

import { RandomController } from './random/controller/random.controller';
import { RandomService } from './random/service/random.service';

@Module({
  imports: [],
  controllers: [RandomController],
  providers: [RandomService],
})
export class AppModule {}
