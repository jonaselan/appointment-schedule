import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { UsersRepository } from '@/core/repositories/users.repository';
import { AppointmentsCacheMemoryRepository } from '@/infra/data/cache-memory/appointments-cache-memory.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { CreateAppointmentUseCase } from './create-appointment.use-case';

describe('CreateAppointmentUseCase', () => {
  let createAppointmentUseCase: CreateAppointmentUseCase;
  let appointmentRepository: AppointmentsRepository;
  let createUserUseCase: CreateUserUseCase;
  let usersRepository: UsersRepository;

  const title = 'Appointment title';
  const content = 'Appointment content';
  const userId = 1;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    appointmentRepository = new AppointmentsCacheMemoryRepository();
    usersRepository = new UsersCacheMemoryRepository();
    createAppointmentUseCase = new CreateAppointmentUseCase(
      appointmentRepository,
    );
    createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.execute({ name, email, password });
  });

  it('should be defined', () => {
    expect(createAppointmentUseCase).toBeDefined();
  });

  it('should create a appointment', async () => {
    const appointment = await createAppointmentUseCase.execute({
      title,
      content,
      userId,
    });
    expect(appointment).toEqual({ id: 1, title, content, userId });
  });
});
