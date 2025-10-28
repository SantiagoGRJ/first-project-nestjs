import { Body, Controller, Get, Post } from "@nestjs/common";
import { GamesService } from "./games.service";


@Controller('games')
export class GameController{

    constructor(private gamesService:GamesService){}

    @Get()
    getAllGames(){
        return this.gamesService.getAllGames()
    }
    @Post()
    createGame(@Body() game:any){
        return this.gamesService.createGame(game)
    }
}