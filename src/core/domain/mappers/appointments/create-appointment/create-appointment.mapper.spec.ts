import { CreateAppointmentMapper } from './create-appointment.mapper';

describe('CreateAppointmentMapper', () => {
  let createAppointmentMapper: CreateAppointmentMapper;

  const when = new Date();
  const type = 'Appointment type';
  const userId = 1;
  const doctorId = 1;

  beforeEach(() => {
    createAppointmentMapper = new CreateAppointmentMapper();
  });

  it('should be defined', () => {
    expect(createAppointmentMapper).toBeDefined();
  });

  it('should map from', () => {
    const appointment = createAppointmentMapper.mapFrom({
      when,
      type,
      userId,
      doctorId,
    });
    expect(appointment).toEqual({ when, type, userId, doctorId });
  });

  it('should map to', () => {
    const appointment = createAppointmentMapper.mapTo({
      id: 1,
      when,
      type,
      userId,
      doctorId,
    });
    expect(appointment).toEqual({ id: 1, when, type, userId, doctorId });
  });
});
