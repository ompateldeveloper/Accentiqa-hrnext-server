/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeStep1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeStep2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeStep3` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_designationId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_divisionId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_locationId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_reportingMgId_fkey`;

-- DropTable
DROP TABLE `Employee`;

-- DropTable
DROP TABLE `EmployeeStep1`;

-- DropTable
DROP TABLE `EmployeeStep2`;

-- DropTable
DROP TABLE `EmployeeStep3`;

-- CreateTable
CREATE TABLE `EmployeeBasicInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empNo` VARCHAR(191) NOT NULL,
    `probationPeriod` VARCHAR(191) NOT NULL,
    `confirmDate` VARCHAR(191) NULL,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NULL,
    `mobileNo` VARCHAR(191) NOT NULL,
    `aadharNo` VARCHAR(191) NOT NULL,
    `emergencyName` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `emergencyNo` VARCHAR(191) NOT NULL,
    `reportingMgId` INTEGER NULL,
    `fathersName` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `spouseName` VARCHAR(191) NULL,
    `doj` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `EmployeeBasicInfo_empNo_key`(`empNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeePosition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empNo` VARCHAR(191) NOT NULL,
    `grade` VARCHAR(191) NOT NULL,
    `costCenter` VARCHAR(191) NOT NULL,
    `designationId` INTEGER NULL,
    `locationId` INTEGER NULL,
    `divisionId` INTEGER NULL,
    `departmentId` INTEGER NULL,
    `shift` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NULL,
    `projectDate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `EmployeePosition_empNo_key`(`empNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeStatutory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empNo` VARCHAR(191) NOT NULL,
    `panNo` VARCHAR(191) NOT NULL,
    `aadharNo` VARCHAR(191) NOT NULL,
    `passportNo` VARCHAR(191) NOT NULL,
    `uanNo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `EmployeeStatutory_empNo_key`(`empNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeePayment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empNo` VARCHAR(191) NOT NULL,
    `paymentType` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `accountNumber` VARCHAR(191) NOT NULL,
    `accHolderName` VARCHAR(191) NOT NULL,
    `ifscCode` VARCHAR(191) NOT NULL,
    `branchName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `EmployeePayment_empNo_key`(`empNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeeBasicInfo` ADD CONSTRAINT `EmployeeBasicInfo_reportingMgId_fkey` FOREIGN KEY (`reportingMgId`) REFERENCES `ReportingManager`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePosition` ADD CONSTRAINT `EmployeePosition_designationId_fkey` FOREIGN KEY (`designationId`) REFERENCES `Designation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePosition` ADD CONSTRAINT `EmployeePosition_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePosition` ADD CONSTRAINT `EmployeePosition_divisionId_fkey` FOREIGN KEY (`divisionId`) REFERENCES `Division`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePosition` ADD CONSTRAINT `EmployeePosition_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePosition` ADD CONSTRAINT `EmployeePosition_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
