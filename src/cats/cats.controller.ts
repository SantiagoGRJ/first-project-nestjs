import { Controller, Get, Header, HttpCode, Param, Post, Redirect, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
    
    @Post()
    //@HttpCode(204)
    //@Header('Cache-Control','no-store')
    create() {
        return "This action adds a new cat"
    }

    @Get()
    //@Redirect('https://nestjs.com', 301)
    findAll(@Req() request: Request) : string{
        return "This action return all casts"
    }

    @Get(':id')
    findOne(@Param('id') id:string ) : string {
        return `This action returns a #${id} cat`
    }
}
