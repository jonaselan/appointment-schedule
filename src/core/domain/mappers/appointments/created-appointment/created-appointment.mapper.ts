import { Mapper } from '@/core/base/mapper';
import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';
import { CreatedAppointmentDto } from '@/shared/dtos/appointments/created-appointment.dto';

export class CreatedAppointmentMapper
  implements Mapper<CreatedAppointmentDto, AppointmentEntity>
{
  public mapFrom(data: CreatedAppointmentDto): AppointmentEntity {
    const appointment = new AppointmentEntity();

    appointment.id = data.id;
    appointment.title = data.title;
    appointment.content = data.content;
    appointment.userId = data.userId;

    return appointment;
  }

  public mapTo(data: AppointmentEntity): CreatedAppointmentDto {
    const appointment = new CreatedAppointmentDto();

    appointment.id = data.id;
    appointment.title = data.title;
    appointment.content = data.content;
    appointment.userId = data.userId;

    return appointment;
  }
}
