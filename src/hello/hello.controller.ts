import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { HelloService } from './hello.service';
import type { IHello } from './interfaces/hello.interface';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

    @Get('new')
    @HttpCode(201)
    somethingNew(){
      return 'something new'
    }

    

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
      return "404 not found"
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
      return "Error route"
    }

    @Get('ticket/:num')
    getNumber(@Param('num',ParseIntPipe) num:number){
      return num + 14
    }

    @Get('active/:status')
    isUserActive(@Param('status',ParseBoolPipe) status:boolean){
      console.log(typeof status)
      return status
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query:{name:string, age:number}){
      console.log(typeof query.name)
      console.log(typeof query.age)
      return `Hello ${query.name}, you are ${query.age + 10} years old`
    }
}
