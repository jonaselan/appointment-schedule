import { Entity } from '@/core/base/entity';

export class AppointmentEntity extends Entity {
  id: number;
  type: string;
  when: Date;
  userId: number;
  doctorId: number;
}
