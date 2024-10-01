import { Controller, Get, HttpCode, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from "express";
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller({})
export class HelloController {

    @Get('/')
    index (@Req() request: Request, @Res() response: Response) {

        response.status(200).json({
            message: 'Hellow World'
        })

        
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return "404 not found"
    }

    @Get('error')
    @HttpCode(500)
    error(){
        return "Error route"
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number} ){
        console.log(`name :${typeof query.name}`);
        console.log(`age :${typeof query.age}`);
        return `Hola ${query.name} tu edad es ${query.age}.`
    }

}
