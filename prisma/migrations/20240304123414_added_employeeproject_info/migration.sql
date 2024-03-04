-- CreateTable
CREATE TABLE `EmployeeProjectInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dateOfJoining` DATETIME(3) NOT NULL,
    `salary` DOUBLE NOT NULL,
    `project` VARCHAR(191) NOT NULL,
    `projectAllocationDate` DATETIME(3) NULL,
    `allocatedProject` VARCHAR(191) NULL,
    `isBillable` BOOLEAN NOT NULL,
    `employeeId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `idx_employee_project_info_employee_id`(`employeeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeeProjectInfo` ADD CONSTRAINT `EmployeeProjectInfo_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
