import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

declare global {
  var prisma: PrismaClient | null
}

export const prisma = global.prisma || new PrismaClient({
  log: ['query']
})