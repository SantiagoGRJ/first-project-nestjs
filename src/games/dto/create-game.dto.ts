import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateGameDto {

  
    @IsString()
    name:string

    @IsNumber()
    age:number

    @IsNotEmpty()
    type:string
}