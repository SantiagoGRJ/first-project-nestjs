import { Injectable, NotFoundException } from '@nestjs/common';
import { IHello } from './interfaces/hello.interface';


@Injectable()
export class HelloService {

    data = []

    getAllHello(): IHello[] {
        return this.data
    }

    createData(value: IHello) {
        this.data.push({
            ...value,
            id: this.data.length + 1
        })
        return value
    }

   
}
