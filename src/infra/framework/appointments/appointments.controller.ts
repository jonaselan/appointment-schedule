import { CreateAppointmentDto } from '@/shared/dtos/appointments/create-appointment.dto';
import { CreateAppointmentUseCase } from '@/use-cases/appointments/create-appointment';
import { FindAllAppointmentsUseCase } from '@/use-cases/appointments/find-all-appointments';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('appointments')
@Controller('appointments')
export class AppointmentsController {
  constructor(
    private createAppointmentUseCase: CreateAppointmentUseCase,
    private findAllAppointmentsUseCase: FindAllAppointmentsUseCase,
  ) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.createAppointmentUseCase.execute(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.findAllAppointmentsUseCase.execute();
  }
}
