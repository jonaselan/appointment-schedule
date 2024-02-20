import { Entity } from '@/core/base/entity';

export class AppointmentEntity extends Entity {
  title: string;
  content: string;
  userId: number;
}
