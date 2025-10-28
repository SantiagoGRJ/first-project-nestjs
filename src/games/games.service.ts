import { Injectable } from '@nestjs/common';
import { IGames } from './interfaces/games.interface';

@Injectable()
export class GamesService {

    private games : IGames[] = [
        {
            name:"Detroit",
            age:12,
            type:"friendly"

        },
        {
            name:"Plants",
            age:32,
            type:"garden"

        }
    ]

    getAllGames():IGames[]{
        return this.games
    }

    createGame(game:IGames){
        this.games.push(game)

        return game
    }

}
