import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;




}
