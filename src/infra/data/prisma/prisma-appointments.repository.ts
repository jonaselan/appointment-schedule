import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';
import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';

export class PrismaAppointmentsRepository implements AppointmentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: AppointmentEntity): Promise<AppointmentEntity> {
    return this.prisma.appointment.create({ data });
  }

  async findAll(
    filter?: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity[]> {
    return this.prisma.appointment.findMany({ where: filter });
  }

  async findOne(filter: AppointmentEntity): Promise<AppointmentEntity> {
    return this.prisma.appointment.findUnique({ where: filter });
  }

  async update(
    id: number,
    data: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity> {
    return this.prisma.appointment.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.appointment.delete({ where: { id } });
  }
}
