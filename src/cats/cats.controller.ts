import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cast.service';
import type { ICat } from './interfaces/cats.interface';
import { CreateCatDto } from './dto/create-cat.dto';




@Controller('cats')
export class CatsController {
    
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll() : Promise<ICat[]> {
        return this.catsService.findAll()
    }

    
}
