import { prisma } from "../prisma/client";
import { User } from "../validators/userValidators";

const create = async (data: User) => {
  return await prisma.user.create({ data });
};

const findAll = async () => {
  return await prisma.user.findMany();
};
const findByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export default { create, findAll, findByEmail };
