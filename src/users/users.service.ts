import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users = [
        {
            id:1,
            name:"Santi"
        },
        {
            id:2,
            name:"Javi"
        }
    ]

    getUsers(){
        return this.users
    }

    createUser(user:CreateUserDto){
        return user
    }
}
