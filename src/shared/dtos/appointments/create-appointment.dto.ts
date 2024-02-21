import { AppointmentTypes } from '@/shared/enums/appointmentTypes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  id?: number;

  @ApiProperty({
    example: AppointmentTypes,
  })
  type: string;

  @ApiProperty({
    example: '2024-12-31 23:23:23',
  })
  when: Date;

  @ApiProperty({
    example: 1,
  })
  userId: number;

  @ApiProperty({
    example: 1,
  })
  doctorId: number;
}
