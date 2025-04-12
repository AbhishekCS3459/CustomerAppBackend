import UserRepository from '../repositories/user.repository';
import { User } from '../validators/userValidators';

const createUser = async (data: User) => {
  return await UserRepository.create(data);
};

const getAllUsers = async () => {
  return await UserRepository.findAll();
};
const getUserByEmail = async (email: string) => {
  return await UserRepository.findByEmail(email);
}

export default { createUser, getAllUsers,getUserByEmail };
