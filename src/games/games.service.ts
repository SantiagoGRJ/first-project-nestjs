import { Injectable, NotFoundException } from '@nestjs/common';
import { IGames } from './interfaces/games.interface';

@Injectable()
export class GamesService {

    private games : IGames[] = [
        {
            id:1,
            name:"Detroit",
            age:12,
            type:"friendly"

        },
        {
            id:2,
            name:"Plants",
            age:32,
            type:"garden"

        }
    ]

    getAllGames():IGames[]{
        return this.games
    }

    getGameById(id:any){
       const data = this.games.find(value => value.id == id);

       if(!data){
        return new NotFoundException(`Data with id ${id} not found `)
       }

       return data
    }

    createGame(game:IGames){
        this.games.push(game)

        return game
    }

}
