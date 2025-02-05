import { Module } from '@nestjs/common';
import { TaskController } from './infrastructure/controller/task.controller';
import { TaskServiceApplication } from './application/service/task.service.application';
import { TaskServiceDomain } from './domain/service/task.service.domain';
import { TaskRepository } from './infrastructure/repository/task.repository';

@Module({
  controllers: [TaskController],
  providers: [TaskServiceApplication,
    {
      provide:'TaskInterfacePortIn',
      useClass: TaskServiceDomain
    },
    {
      provide:'TaskInterfacePortOut',
      useClass: TaskRepository
    }
  ],
})
export class AppModule {}
