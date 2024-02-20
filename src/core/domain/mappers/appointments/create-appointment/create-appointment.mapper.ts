import { Mapper } from '@/core/base/mapper';
import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';
import { CreateAppointmentDto } from '@/shared/dtos/appointments/create-appointment.dto';

export class CreateAppointmentMapper extends Mapper<
  CreateAppointmentDto,
  AppointmentEntity
> {
  public mapFrom(data: CreateAppointmentDto): AppointmentEntity {
    const appointment = new AppointmentEntity();

    appointment.title = data.title;
    appointment.content = data.content;
    appointment.userId = data.userId;

    return appointment;
  }

  public mapTo(data: AppointmentEntity): CreateAppointmentDto {
    const appointment = new CreateAppointmentDto();

    appointment.id = data.id;
    appointment.title = data.title;
    appointment.content = data.content;
    appointment.userId = data.userId;

    return appointment;
  }
}
