/*
  Warnings:

  - You are about to drop the column `location` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfJoining` on the `EmployeeProjectInfo` table. All the data in the column will be lost.
  - You are about to drop the column `project` on the `EmployeeProjectInfo` table. All the data in the column will be lost.
  - You are about to drop the column `projectAllocationDate` on the `EmployeeProjectInfo` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `EmployeeStep2` table. All the data in the column will be lost.
  - Added the required column `doj` to the `EmployeeProjectInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `location`,
    ADD COLUMN `locationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `EmployeeProjectInfo` DROP COLUMN `dateOfJoining`,
    DROP COLUMN `project`,
    DROP COLUMN `projectAllocationDate`,
    ADD COLUMN `doj` VARCHAR(191) NOT NULL,
    ADD COLUMN `projectDate` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `EmployeeStep2` DROP COLUMN `location`,
    ADD COLUMN `locationId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
