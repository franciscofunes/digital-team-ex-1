import { Module } from '@nestjs/common';
import { MultipleRandomController } from './random-multiple/controller/multiple-random.controller';
import { MultipleRandomService } from './random-multiple/service/multiple-random.service';
import { RandomController } from './random/controller/random.controller';
import { RandomService } from './random/service/random.service';

@Module({
  imports: [],
  controllers: [RandomController, MultipleRandomController],
  providers: [RandomService, MultipleRandomService],
})
export class AppModule {}
