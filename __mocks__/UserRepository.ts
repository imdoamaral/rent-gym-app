import { jest } from '@jest/globals';
import { User } from '../src/models/User';
import { UserRepository as Repository } from '../src/repositories/UserRepository';

const user: User = {
  id: 3,
  nome: "USER_TEST",
  email: "test@gg.com",
  senha: "12345",
  data_criacao: new Date()
}

const userRepository: jest.Mocked<Repository> = {
  createUser: jest.fn(),
  getUserById: jest.fn(),
  login: jest.fn(),
}

userRepository.createUser.mockResolvedValue(user)
userRepository.getUserById.mockResolvedValue(user)
userRepository.login.mockResolvedValue(user)

export default userRepository