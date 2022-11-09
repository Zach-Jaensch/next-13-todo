/*
  Warnings:

  - The primary key for the `reminders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `reminders` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "reminders" DROP CONSTRAINT "reminders_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "reminders_pkey" PRIMARY KEY ("id");
