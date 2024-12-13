import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { IProduct } from './iproducts.interface';
import { Category } from '@prisma/client';
import { Product } from './entities/product.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { FindDto } from './dto/find-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
@ApiTags('product')

export class ProductsController implements IProduct {
  constructor(private readonly product: ProductsService) {}

  @Post('')
  CreateProduct(@Body()data: CreateProductDto): Promise<Product> {
    return this.product.CreateProduct(data)
  }
  GetProducts(data: FindDto): Promise<Product[]> {
    return this.product.GetProducts(data)
  }
  GetCategory(data: FindDto): Promise<Category[]> {
    return this.product.GetCategory(data)
    
  }
  FindProductById(data: FindDto): Promise<Product> {
    return this.product.FindProductById(data)

  }
  FindProductByName(data: FindDto): Promise<Product> {
    return this.product.FindProductByName(data)

  }
  FindProductByPrice(data: FindDto): Promise<Product> {
    return this.product.FindProductByPrice(data)


  }
  FindProductByVendorId(data: FindDto): Promise<Product> {
    return this.product.FindProductByVendorId(data)

  }
  FindProductCategoryId(data: FindDto): Promise<Product> {
    return this.product.FindProductCategoryId(data)

  }
  FindProductReviews(data: FindDto): Promise<Product[]> {
    return this.product.FindProductReviews(data)

  }
  UpdateProductProperty(data: UpdateProductDto): Promise<Product> {
    return this.product.UpdateProductProperty(data)

  }
 
  RemoveProductById(data: string): Promise<Product> {
    return this.product.RemoveProductById(data)

  }
 

 
}
