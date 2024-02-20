import { CreatedAppointmentMapper } from './created-appointment.mapper';

describe('CreatedAppointmentMapper', () => {
  let createdAppointmentMapper: CreatedAppointmentMapper;

  const id = 1;
  const title = 'Appointment title';
  const content = 'Appointment content';
  const userId = 1;

  beforeEach(() => {
    createdAppointmentMapper = new CreatedAppointmentMapper();
  });

  it('should be defined', () => {
    expect(createdAppointmentMapper).toBeDefined();
  });

  it('should map from', () => {
    const appointment = createdAppointmentMapper.mapFrom({
      id,
      title,
      content,
      userId,
    });
    expect(appointment).toEqual({ id, title, content, userId });
  });

  it('should map to', () => {
    const appointment = createdAppointmentMapper.mapTo({
      id,
      title,
      content,
      userId,
    });
    expect(appointment).toEqual({ id, title, content, userId });
  });
});
