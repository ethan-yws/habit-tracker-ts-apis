import { CreateUserDto } from '../dto/create.user.dto';
import { SignInDto } from '../dto/signin.dto';
import { UserEntity } from '../entity/user.entity';
import { UserService } from './user.service';

const mockCreateUserParams: CreateUserDto = {
  userName: 'Ethan',
  password: 'pwd123',
  email: 'ethan@test.com',
  avatarUrl: 'ethan.jpg',
};

const mockSignInParams: SignInDto = {
  email: 'ethan@gmail.com',
  password: 'pwd123',
};

describe('User Service', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should successfully register a new user', async () => {
    UserEntity.insert = jest.fn().mockResolvedValueOnce({
      id: '1',
    });

    await service.registerUser(mockCreateUserParams);
  });

  it('should successfully sign in user', async () => {
    UserEntity.findOne = jest.fn().mockResolvedValueOnce({
      id: 3,
      userId: '630c3157-f464-4d7c-912c-57f2b597ce1e',
      userName: 'Kath',
      password: 'password123',
      email: 'kath.wong@gmail.com',
      avatarUrl: 'test.png',
      createdDate: '2022-03-09T10:12:04.167Z',
      updatedDate: null,
    });

    const res = await service.signIn(mockSignInParams);

    expect(UserEntity.findOne).toHaveBeenCalledWith({
      email: 'ethan@gmail.com',
      password: 'pwd123',
    });

    expect(res).toBe(true);
  });

  it('should fail to sign in user when user not found in users table', async () => {
    UserEntity.findOne = jest.fn().mockResolvedValueOnce(undefined);

    const res = await service.signIn(mockSignInParams);

    expect(UserEntity.findOne).toHaveBeenCalledWith({
      email: 'ethan@gmail.com',
      password: 'pwd123',
    });

    expect(res).toBe(false);
  });
});
