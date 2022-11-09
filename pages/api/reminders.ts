// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'

type Data = {
  name: string
}




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const prisma = new PrismaClient()
  const reminders = await prisma.reminder.findMany()
  res.status(200).json(reminders)
}
