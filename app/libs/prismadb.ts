import { PrismaClient } from "@prisma/client"

// difinisi global
declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
// biar ga hot reload
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
