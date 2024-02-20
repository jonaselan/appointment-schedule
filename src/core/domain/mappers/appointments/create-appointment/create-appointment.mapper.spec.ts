import { CreateAppointmentMapper } from './create-appointment.mapper';

describe('CreateAppointmentMapper', () => {
  let createAppointmentMapper: CreateAppointmentMapper;

  const title = 'Appointment title';
  const content = 'Appointment content';
  const userId = 1;

  beforeEach(() => {
    createAppointmentMapper = new CreateAppointmentMapper();
  });

  it('should be defined', () => {
    expect(createAppointmentMapper).toBeDefined();
  });

  it('should map from', () => {
    const appointment = createAppointmentMapper.mapFrom({
      title,
      content,
      userId,
    });
    expect(appointment).toEqual({ title, content, userId });
  });

  it('should map to', () => {
    const appointment = createAppointmentMapper.mapTo({
      id: 1,
      title,
      content,
      userId,
    });
    expect(appointment).toEqual({ id: 1, title, content, userId });
  });
});
