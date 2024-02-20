import { Repository } from '@/core/base/repository';
import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';

export abstract class AppointmentsRepository extends Repository<AppointmentEntity> {}
