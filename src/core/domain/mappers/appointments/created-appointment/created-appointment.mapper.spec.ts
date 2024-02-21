import { CreatedAppointmentMapper } from './created-appointment.mapper';

describe('CreatedAppointmentMapper', () => {
  let createdAppointmentMapper: CreatedAppointmentMapper;

  const id = 1;
  const when = new Date();
  const type = 'Appointment type';
  const userId = 1;
  const doctorId = 1;

  beforeEach(() => {
    createdAppointmentMapper = new CreatedAppointmentMapper();
  });

  it('should be defined', () => {
    expect(createdAppointmentMapper).toBeDefined();
  });

  it('should map from', () => {
    const appointment = createdAppointmentMapper.mapFrom({
      id,
      when,
      type,
      userId,
      doctorId,
    });
    expect(appointment).toEqual({ id, when, type, userId, doctorId });
  });

  it('should map to', () => {
    const appointment = createdAppointmentMapper.mapTo({
      id,
      when,
      type,
      userId,
      doctorId,
    });
    expect(appointment).toEqual({ id, when, type, userId, doctorId });
  });
});
