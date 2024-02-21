import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { UsersRepository } from '@/core/repositories/users.repository';
import { AppointmentsCacheMemoryRepository } from '@/infra/data/cache-memory/appointments-cache-memory.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateAppointmentUseCase } from '@/use-cases/appointments/create-appointment';
import { FindAllAppointmentsUseCase } from '@/use-cases/appointments/find-all-appointments';
import { CreateUserUseCase } from '@/use-cases/users/create-user';

describe('CreateAppointmentUseCase', () => {
  let findAllAppointmentsUseCase: FindAllAppointmentsUseCase;
  let createAppointmentUseCase: CreateAppointmentUseCase;
  let appointmentsRepository: AppointmentsRepository;
  let createUserUseCase: CreateUserUseCase;
  let usersRepository: UsersRepository;

  const when = new Date();
  const type = 'Appointment type';
  const userId = 1;
  const doctorId = 1;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    appointmentsRepository = new AppointmentsCacheMemoryRepository();
    usersRepository = new UsersCacheMemoryRepository();
    createAppointmentUseCase = new CreateAppointmentUseCase(
      appointmentsRepository,
    );
    createUserUseCase = new CreateUserUseCase(usersRepository);
    findAllAppointmentsUseCase = new FindAllAppointmentsUseCase(
      appointmentsRepository,
    );

    await createUserUseCase.execute({ name, email, password });
    await createAppointmentUseCase.execute({ when, type, userId, doctorId });
  });

  it('should be defined', () => {
    expect(findAllAppointmentsUseCase).toBeDefined();
  });

  it('should find all appointments', async () => {
    const appointments = await findAllAppointmentsUseCase.execute();
    expect(appointments).toEqual([{ id: 1, when, type, userId, doctorId }]);
  });
});
