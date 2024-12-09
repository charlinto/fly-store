import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { iproducts } from './iproducts.interface';
import { User, Category, Review } from '@prisma/client';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService  implements iproducts {
  createProduct(data: CreateProductDto): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findProductById(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findProductName(name: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findProductByPrice(price: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findProductByvendor(vendorId: string): Promise<Array<User>> {
    throw new Error('Method not implemented.');
  }
  findProductCategory(categoryId: string): Promise<Array<Category>> {
    throw new Error('Method not implemented.');
  }
  findProductReviews(productId: string): Promise<Array<Review>> {
    throw new Error('Method not implemented.');
  }
  updateProductById(id: string, data: UpdateUserDto): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  updateProductName(id: string, name: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  updateProductPrice(id: string, price: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  removeProductById(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}