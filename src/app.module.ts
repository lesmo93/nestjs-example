import { Module } from '@nestjs/common';
import { TaskModule } from "./task/task.module";
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, ProjectModule, AuthModule, HelloModule, PaymentsModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
