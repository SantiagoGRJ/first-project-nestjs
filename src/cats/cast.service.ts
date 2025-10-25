import { Injectable } from "@nestjs/common";
import { ICat } from "./interfaces/cats.interface";



@Injectable()
export class CatsService{
    
    private readonly casts: ICat[] = [];

    create(cats : ICat) {
        this.casts.push(cats)
    }

    findAll() : ICat[]{
        return this.casts
    }
}
