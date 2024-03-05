/*
  Warnings:

  - You are about to drop the column `idAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Whitelist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Whitelist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Whitelist` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Whitelist_email_key` ON `Whitelist`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `idAdmin`;

-- AlterTable
ALTER TABLE `Whitelist` DROP COLUMN `email`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Whitelist_userId_key` ON `Whitelist`(`userId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_fkey` FOREIGN KEY (`id`) REFERENCES `Whitelist`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
