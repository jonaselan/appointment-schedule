import { AppointmentsRepository } from '@/core/repositories/appointments.repository';
import { UsersRepository } from '@/core/repositories/users.repository';
import { AppointmentsCacheMemoryRepository } from '@/infra/data/cache-memory/appointments-cache-memory.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateAppointmentUseCase } from '@/use-cases/appointments/create-appointment';
import { FindAllAppointmentsUseCase } from '@/use-cases/appointments/find-all-appointments';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { FindAllUsersUseCase } from '@/use-cases/users/find-all-users';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users/users.controller';
import { AppointmentsController } from './appointments.controller';

describe('AppointmentsController', () => {
  let usersController: UsersController;
  let appointmentsController: AppointmentsController;

  const title = 'Appointment title';
  const content = 'Appointment content';
  const userId = 1;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    const usersModule: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersRepository,
          useClass: UsersCacheMemoryRepository,
        },
        {
          provide: CreateUserUseCase,
          useFactory: (repository: UsersRepository) =>
            new CreateUserUseCase(repository),
          inject: [UsersRepository],
        },
        {
          provide: FindAllUsersUseCase,
          useFactory: (repository: UsersRepository) =>
            new FindAllUsersUseCase(repository),
          inject: [UsersRepository],
        },
      ],
    }).compile();

    const appointmentsModule: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsController],
      providers: [
        {
          provide: AppointmentsRepository,
          useClass: AppointmentsCacheMemoryRepository,
        },
        {
          provide: CreateAppointmentUseCase,
          useFactory: (repository: AppointmentsRepository) =>
            new CreateAppointmentUseCase(repository),
          inject: [AppointmentsRepository],
        },
        {
          provide: FindAllAppointmentsUseCase,
          useFactory: (repository: AppointmentsRepository) =>
            new FindAllAppointmentsUseCase(repository),
          inject: [AppointmentsRepository],
        },
      ],
    }).compile();

    usersController = usersModule.get<UsersController>(UsersController);
    appointmentsController = appointmentsModule.get<AppointmentsController>(
      AppointmentsController,
    );

    await usersController.create({ name, email, password });
  });

  it('should be defined', () => {
    expect(appointmentsController).toBeDefined();
  });

  it('should create a appointment', async () => {
    const appointment = await appointmentsController.create({
      title,
      content,
      userId,
    });
    expect(appointment).toEqual({ id: 1, title, content, userId });
  });

  it('should find all appointments', async () => {
    await appointmentsController.create({ title, content, userId });
    const appointments = await appointmentsController.findAll();
    expect(appointments).toEqual([{ id: 1, title, content, userId }]);
  });
});
