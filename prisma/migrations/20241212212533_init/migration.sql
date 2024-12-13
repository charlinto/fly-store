/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `OrderItem` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Payment` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Profile` table. All the data in the column will be lost.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Review` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `_id` was added to the `Category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `Order` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `OrderItem` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `Payment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `Profile` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `Review` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropIndex
DROP INDEX "Profile_userId_key";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ALTER COLUMN "orderId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ALTER COLUMN "orderId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "vendorId" DROP NOT NULL,
ALTER COLUMN "vendorId" SET DATA TYPE TEXT,
ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "categoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "User"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
