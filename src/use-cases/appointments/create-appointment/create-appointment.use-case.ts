import { UseCase } from '@/core/base/use-case';
import { CreateAppointmentMapper } from '@/core/domain/mappers/appointments/create-appointment';
import { CreatedAppointmentMapper } from '@/core/domain/mappers/appointments/created-appointment';
import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { CreateAppointmentDto } from '@/shared/dtos/appointments/create-appointment.dto';
import { CreatedAppointmentDto } from '@/shared/dtos/appointments/created-appointment.dto';

export class CreateAppointmentUseCase
  implements UseCase<CreatedAppointmentDto>
{
  private createAppointmentMapper: CreateAppointmentMapper;
  private createdAppointmentMapper: CreatedAppointmentMapper;

  constructor(private readonly repository: AppointmentsRepository) {
    this.createAppointmentMapper = new CreateAppointmentMapper();
    this.createdAppointmentMapper = new CreatedAppointmentMapper();
  }

  public async execute(
    appointment: CreateAppointmentDto,
  ): Promise<CreatedAppointmentDto> {
    const entity = this.createAppointmentMapper.mapFrom(appointment);

    const createdAppointment = await this.repository.create(entity);
    return this.createdAppointmentMapper.mapTo(createdAppointment);
  }
}
