import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GamesService } from "./games.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { FindOneParams } from "./dto/FindOneParams.dto";


@Controller('games')
export class GameController{

    constructor(private gamesService:GamesService){}

    @Get()
    getAllGames(){
        return this.gamesService.getAllGames()
    }

    @Get('/:id')
    getGameById(@Param() params:FindOneParams){
        return this.gamesService.getGameById(params.id);
    }

    @Post()
    createGame(@Body() game:CreateGameDto){
        return this.gamesService.createGame(game)
    }
}