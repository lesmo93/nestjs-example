import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('middleware', req.originalUrl);

    /*const {authorization} = req.headers;
    if (! authorization) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    if(authorization !== 'abc123') {
     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); 
    }*/

    next();
  }
}
