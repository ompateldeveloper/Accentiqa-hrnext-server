/*
  Warnings:

  - You are about to drop the column `empSeries` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `empSeries` on the `EmployeeStep1` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `empSeries`;

-- AlterTable
ALTER TABLE `EmployeeStep1` DROP COLUMN `empSeries`;
