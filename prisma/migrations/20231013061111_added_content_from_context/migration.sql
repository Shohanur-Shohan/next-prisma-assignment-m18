/*
  Warnings:

  - You are about to drop the column `context` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `context` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `context` on the `post_meta` table. All the data in the column will be lost.
  - Added the required column `content` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `post_meta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `context`,
    ADD COLUMN `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `context`,
    ADD COLUMN `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `post_meta` DROP COLUMN `context`,
    ADD COLUMN `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `firstName` VARCHAR(50) NULL,
    MODIFY `middleName` VARCHAR(50) NULL,
    MODIFY `lastName` VARCHAR(50) NULL,
    MODIFY `mobile` VARCHAR(15) NULL,
    MODIFY `email` VARCHAR(50) NULL,
    MODIFY `passwordHash` VARCHAR(32) NULL,
    MODIFY `intro` TINYTEXT NULL,
    MODIFY `profile` TEXT NULL;
