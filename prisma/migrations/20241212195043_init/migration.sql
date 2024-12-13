/*
  Warnings:

  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "stock",
ALTER COLUMN "price" SET DATA TYPE TEXT;
