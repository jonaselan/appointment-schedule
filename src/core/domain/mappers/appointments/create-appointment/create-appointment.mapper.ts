import { Mapper } from '@/core/base/mapper';
import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';
import { CreateAppointmentDto } from '@/shared/dtos/appointments/create-appointment.dto';

export class CreateAppointmentMapper extends Mapper<
  CreateAppointmentDto,
  AppointmentEntity
> {
  public mapFrom(data: CreateAppointmentDto): AppointmentEntity {
    const appointment = new AppointmentEntity();

    appointment.type = data.type;
    appointment.when = data.when;
    appointment.userId = data.userId;
    appointment.doctorId = data.doctorId;

    return appointment;
  }

  public mapTo(data: AppointmentEntity): CreateAppointmentDto {
    const appointment = new CreateAppointmentDto();

    appointment.id = data.id;
    appointment.type = data.type;
    appointment.when = data.when;
    appointment.userId = data.userId;
    appointment.doctorId = data.doctorId;

    return appointment;
  }
}
