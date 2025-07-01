import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const connect = async function (params) {
  await prisma.$connect();
  console.log("-------Conectado----------");
};

export const disconnect = async function (params) {
  await prisma.$disconnect();
  console.log("-----------Desconectado-----------");
};

export default prisma;
