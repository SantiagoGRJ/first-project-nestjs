import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CastService } from './cats/cast.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CastService],
})
export class AppModule {}
