import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HelloService } from './hello.service';
import type { IHello } from './interfaces/hello.interface';

@Controller('hello')
export class HelloController {

    constructor(private helloService:HelloService) {}

    @Get()
    index() {
        
        return this.helloService.getAllHello()
    }

    @Post('')
    createData(@Body() value:IHello){
      return  this.helloService.createData(value)
    }


    @Get('/:id')
    getHelloById(@Param('id') id:string){
       return this.helloService.getByIdHello(Number(id))
    }
}
