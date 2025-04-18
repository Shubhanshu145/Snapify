import { IsEmail, IsNumber, IsString, Matches, MinLength } from "class-validator";

export class loginDto{
    
    @IsEmail()
    email:string;
    @IsString()
    @IsString()
    name:string;
    @IsString()
    password:string;
    @IsString()
    role:string

    

}