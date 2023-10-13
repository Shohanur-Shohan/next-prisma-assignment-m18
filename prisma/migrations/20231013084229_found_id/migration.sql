/*
  Warnings:

  - You are about to drop the column `parentID` on the `post_comment` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `post_comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post_comment` DROP COLUMN `parentID`,
    ADD COLUMN `parentId` BIGINT UNSIGNED NOT NULL;
