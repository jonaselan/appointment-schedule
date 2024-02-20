import { UseCase } from '@/core/base/use-case';
import { CreatedAppointmentMapper } from '@/core/domain/mappers/appointments/created-appointment';
import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { CreatedAppointmentDto } from '@/shared/dtos/appointments/created-appointment.dto';

export class FindAllAppointmentsUseCase
  implements UseCase<CreatedAppointmentDto[]>
{
  private createdAppointmentMapper: CreatedAppointmentMapper;

  constructor(private readonly repository: AppointmentsRepository) {
    this.createdAppointmentMapper = new CreatedAppointmentMapper();
  }

  public async execute(): Promise<CreatedAppointmentDto[]> {
    const appointments = await this.repository.findAll();
    return appointments.map((appointment) =>
      this.createdAppointmentMapper.mapTo(appointment),
    );
  }
}
