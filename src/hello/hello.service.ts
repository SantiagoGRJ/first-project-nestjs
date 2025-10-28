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

    getByIdHello(id: number) {
        const dataReturn = this.data.find(value => value.id === id)

        if (!dataReturn) {
            return new NotFoundException(`The data with id ${id} not found`)
        }

        return dataReturn
    }
}
