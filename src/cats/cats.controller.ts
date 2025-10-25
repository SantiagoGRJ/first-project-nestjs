import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import type { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    
    @Post()
    //@HttpCode(204)
    //@Header('Cache-Control','no-store')
    async create(@Body() createCatDto : CreateCatDto ) {
        return "This action adds a new cat"
    }

    @Get()
    //@Redirect('https://nestjs.com', 301)
    async findAll(@Query('age') age:number, @Query('breed') breed: string) {
        return `This action returns all cast filtered by age: ${age} and breed: ${breed}`
    }

    @Get(':id')
    findOne(@Param('id') id:string ) : string {
        return `This action returns a #${id} cat`
    }
}
