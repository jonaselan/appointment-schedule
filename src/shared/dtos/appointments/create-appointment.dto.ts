import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  id?: number;

  @ApiProperty({
    example: 'Appointment title',
  })
  title: string;

  @ApiProperty({
    example: 'Appointment content',
  })
  content: string;

  @ApiProperty({
    example: 1,
  })
  userId: number;
}
