import { AppointmentEntity } from '@/core/domain/entities/appointment.entity';
import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';

export class PrismaAppointmentsRepository implements AppointmentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: AppointmentEntity): Promise<AppointmentEntity> {
    return this.prisma.post.create({ data });
  }

  async findAll(
    filter?: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity[]> {
    return this.prisma.post.findMany({ where: filter });
  }

  async findOne(
    filter: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity> {
    return this.prisma.post.findUnique({ where: filter });
  }

  async update(
    id: number,
    data: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity> {
    return this.prisma.post.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.post.delete({ where: { id } });
  }
}
