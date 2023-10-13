/*
  Warnings:

  - You are about to drop the column `metalTitle` on the `post` table. All the data in the column will be lost.
  - Added the required column `metaTitle` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `metalTitle`,
    ADD COLUMN `metaTitle` VARCHAR(100) NOT NULL;
