import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { PrismaAppointmentsRepository } from '@/infra/data/prisma/prisma-appointments.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';
import { CreateAppointmentUseCase } from '@/use-cases/appointments/create-appointment';
import { FindAllAppointmentsUseCase } from '@/use-cases/appointments/find-all-appointments';
import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';

@Module({
  controllers: [AppointmentsController],
  providers: [
    PrismaService,
    {
      provide: AppointmentsRepository,
      useFactory: (prisma: PrismaService) =>
        new PrismaAppointmentsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateAppointmentUseCase,
      useFactory: (repository: AppointmentsRepository) =>
        new CreateAppointmentUseCase(repository),
      inject: [AppointmentsRepository],
    },
    {
      provide: FindAllAppointmentsUseCase,
      useFactory: (repository: AppointmentsRepository) =>
        new FindAllAppointmentsUseCase(repository),
      inject: [AppointmentsRepository],
    },
  ],
})
export class AppointmentsModule {}
