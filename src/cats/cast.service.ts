import { Injectable } from "@nestjs/common";
import { ICast } from "./create-cat.dto";


@Injectable()
export class CatsService{
    
    private readonly casts: ICast[] = [];

    create(cats : ICast) {
        this.casts.push(cats)
    }

    findAll() : ICast[]{
        return this.casts
    }
}
