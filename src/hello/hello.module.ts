import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
    controllers:[HelloController]
})
export class HelloModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(
            {path:'/', method: RequestMethod.GET}
        )
        .apply(LoggerMiddleware)
        .forRoutes(
            {path:'/greet', method: RequestMethod.GET}
        )
    }
    
    
}
