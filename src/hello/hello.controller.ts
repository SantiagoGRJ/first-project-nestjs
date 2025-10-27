import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('hello')
export class HelloController {

    @Get()
    index(@Req() request:Request,@Res() response:Response) {
        console.log(request.url)
        return response.status(200).json({
            message:"Hello World"
        })
    }
}
