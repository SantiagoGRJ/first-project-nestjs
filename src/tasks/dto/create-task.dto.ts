import { IsBoolean, IsNotEmpty, IsString, MaxLength,  } from "class-validator"

export class CreateTaskDto{
    

    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    content:string

    @IsNotEmpty()
    @IsBoolean()
    status:boolean
}