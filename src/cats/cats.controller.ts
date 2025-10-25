import { Body, Controller, Get, Post } from '@nestjs/common';
import type { ICast } from './create-cat.dto';
import { CatsService } from './cast.service';



@Controller('cats')
export class CatsController {
    
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDto: ICast){
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll() : Promise<ICast[]> {
        return this.catsService.findAll()
    }

    
}
