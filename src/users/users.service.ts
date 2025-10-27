import { Injectable } from '@nestjs/common';

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
}
