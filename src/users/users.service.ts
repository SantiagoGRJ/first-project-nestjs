import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';
import { IUser } from './interfaces/users.interface';


@Injectable()
export class UsersService {

    constructor(private prisma:PrismaService) {}

    async getUsers(){
        return await this.prisma.user.findMany()
    }

    async createUser(user:IUser){
    return await this.prisma.user.create({data:user})
    }
}
