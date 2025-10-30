import { Injectable } from "@nestjs/common";
import { ICat } from "./interfaces/cats.interface";


@Injectable()
export class CatsService{
    
    private casts: any[] = [
        {
            id:1,
            name:"cat",
            age:12,
            breed:"breed"
        }
    ];

    createCat(cat : ICat) {
       // console.log(cat)
        this.casts.push({
            ...cat,
            id:this.casts.length+1,
        })
        return cat
    }

    findAll() : ICat[]{
        return this.casts
    }
}
