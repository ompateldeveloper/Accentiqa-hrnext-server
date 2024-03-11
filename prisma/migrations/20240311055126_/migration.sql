/*
  Warnings:

  - Added the required column `empNo` to the `EmployeeStep2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empNo` to the `EmployeeStep3` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `EmployeeStep2` ADD COLUMN `empNo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `EmployeeStep3` ADD COLUMN `empNo` VARCHAR(191) NOT NULL;
