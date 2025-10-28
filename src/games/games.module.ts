import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameController } from './games.controller';


@Module({
    controllers:[GameController],
    providers:[GamesService]
})
export class GamesModule {}
