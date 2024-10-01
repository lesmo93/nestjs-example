import {  IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength, minLength } from "class-validator";
export class CreateTaskDto {

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    @MaxLength(100)
    title: string

    @IsBoolean()
    status: boolean

}