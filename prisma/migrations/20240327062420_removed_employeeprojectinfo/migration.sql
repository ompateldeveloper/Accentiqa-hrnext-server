/*
  Warnings:

  - You are about to drop the `EmployeeProjectInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `paymentType` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `EmployeeProjectInfo` DROP FOREIGN KEY `EmployeeProjectInfo_employeeId_fkey`;

-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `isBillable` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `paymentType` VARCHAR(191) NOT NULL,
    ADD COLUMN `salary` DOUBLE NULL,
    MODIFY `passportNo` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `EmployeeProjectInfo`;
