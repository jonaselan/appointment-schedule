import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';
import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { RepositoryCacheMemory } from '@/infra/data/cache-memory/repository-cache-memory';

export class AppointmentsCacheMemoryRepository
  extends RepositoryCacheMemory<AppointmentEntity>
  implements AppointmentsRepository {}
