-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empSeries` VARCHAR(191) NOT NULL,
    `probationPeriod` VARCHAR(191) NOT NULL,
    `empNo` VARCHAR(191) NOT NULL,
    `confirmDate` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NULL,
    `mobileNo` VARCHAR(191) NOT NULL,
    `aadharNo` VARCHAR(191) NOT NULL,
    `emergencyName` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `emergencyNo` VARCHAR(191) NOT NULL,
    `reportingMgId` INTEGER NULL,
    `fathersName` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `spouseName` VARCHAR(191) NULL,
    `doj` DATETIME(3) NULL,
    `grade` VARCHAR(191) NOT NULL,
    `costCenter` VARCHAR(191) NOT NULL,
    `designationId` INTEGER NULL,
    `location` VARCHAR(191) NOT NULL,
    `divisionId` INTEGER NULL,
    `departmentId` INTEGER NULL,
    `shift` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NULL,
    `projectDate` VARCHAR(191) NULL,
    `panNo` VARCHAR(191) NOT NULL,
    `passportNo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeStep1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empSeries` VARCHAR(191) NOT NULL,
    `probationPeriod` VARCHAR(191) NOT NULL,
    `empNo` VARCHAR(191) NOT NULL,
    `confirmDate` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NULL,
    `mobileNo` VARCHAR(191) NOT NULL,
    `aadharNo` VARCHAR(191) NOT NULL,
    `emergencyName` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `emergencyNo` VARCHAR(191) NOT NULL,
    `reportingMgId` INTEGER NULL,
    `fathersName` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `spouseName` VARCHAR(191) NULL,
    `doj` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeStep2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grade` VARCHAR(191) NOT NULL,
    `costCenter` VARCHAR(191) NOT NULL,
    `designationId` INTEGER NULL,
    `location` VARCHAR(191) NOT NULL,
    `divisionId` INTEGER NULL,
    `departmentId` INTEGER NULL,
    `shift` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NULL,
    `projectDate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeStep3` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `panNo` VARCHAR(191) NOT NULL,
    `aadharNo` VARCHAR(191) NOT NULL,
    `passportNo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_reportingMgId_fkey` FOREIGN KEY (`reportingMgId`) REFERENCES `ReportingManager`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_designationId_fkey` FOREIGN KEY (`designationId`) REFERENCES `Designation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_divisionId_fkey` FOREIGN KEY (`divisionId`) REFERENCES `Division`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
