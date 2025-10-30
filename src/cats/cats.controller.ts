import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';




@Controller('cats')
export class CatsController {
    
    constructor(private catsService: CatsService){}

    @Post()
    create(@Body() cat:CreateCatDto ){
      
      return this.catsService.createCat(cat)
    }

    @Get()
     findAll() {
        return this.catsService.findAll()
    }

    
}
