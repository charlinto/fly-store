import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '@prisma/client';
import { Product } from './entities/product.entity';
import { IProduct} from './iproducts.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindDto } from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { disconnect } from 'process';

@Injectable()
export class ProductsService implements IProduct {
  constructor(private readonly prisma: PrismaService) {}
  async CreateProduct(data: CreateProductDto): Promise<Product> {
    try {
      let query = await this.prisma.product.create({
        data: {
          name: data['name'],
          description: data['description'],
          price: data['price'],
          images : data['images'],
          vendorId: data['vendorId'],
          categoryId: data['categoryId']
        }
      
        
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error)
      
    }

  }

  // async Addphoto(
  //   data: Partial<{
  //     id:string;
  //     data:string;
  //     createdAt: Date;
  //     updateAt:Date;
  //     productId: string
  //   }>
  // ):Promise<Product> {
  //   try{
  //     let query =await this.prisma.product.update({
  //       where:{
  //         id : data['productId'],
  //       },
  //       data:{
  //         photos:{
  //           create:{
  //             data:data['data']
  //           },
  //         },
  //       },
  //     });
  //     return query;

  //   }catch (error) {
  //     throw new BadRequestException(error);

  //   }
  // }

  async GetProducts(data: FindDto): Promise<Product[]> {
    try { 
      let query = await this.prisma.product.findMany({
        where: {
          id: data['id']
        },
      });
      return query
      
    } catch (error) {
      throw new BadRequestException(undefined, error)

      
    }
  }
  async GetCategory(data: FindDto): Promise<Category[]> {
     try {
      let query = await this.prisma.product.findMany({
        where:{
          id:data['id']
        },
      });
      return query

     } catch(error) {
      throw new BadRequestException()
     }
  }
  async FindProductById(data: FindDto): Promise<Product> {
     try {
      let query = await this.prisma.product.findFirstOrThrow({
        where: {
          id: data ['id']
        },
      });
      return query
     } catch (error) {
      throw new BadRequestException()
      
     }
  }
  async FindProductByName(data: FindDto): Promise<Product> {
    try {
      let query = await this.prisma.product.findFirstOrThrow({
        where: {
          id: data ['id']
        },
      });
      return query
     } catch (error) {
      throw new BadRequestException()
      
     }
    
  }
  async FindProductByPrice(data: FindDto): Promise<Product> {
    try {
      let query = await this.prisma.product.findFirstOrThrow({
        where: {
          id: data ['id'],
          price: data['properties'] ['price']
        },
      });
      return query
     } catch (error) {
      throw new BadRequestException()
      
     }
  }
  async FindProductByVendorId(data: FindDto): Promise<Product> {
    try {
      let query = await this.prisma.product.findFirstOrThrow({
        where: {
          id: data ['id']
        },
      });
      return query
     } catch (error) {
      throw new BadRequestException()
      
     }
    
  }
 async FindProductCategoryId(data: FindDto): Promise<Product> {
  try {
    let query = await this.prisma.product.findFirstOrThrow({
      where: {
        id: data ['id']
      },
    });
    return query
   } catch (error) {
    throw new BadRequestException()
    
   }
  }
  async FindProductReviews(data: FindDto): Promise<Product[]> {
    try {
      let query = await this.prisma.product.findMany({
        where: {
          id: data ['id'],
          reviews:data['properties']['review']

        },
      });
      return query
     } catch (error) {
      throw new BadRequestException()
      
     }
  }
  async UpdateProductProperty(data: UpdateProductDto): Promise<Product | BadRequestException> {
     try {
      let query = data['properties']['name'] !==undefined?
      await this.prisma.product.update({
        where:{
          id:data['id'],
        },
        data:{
          name:data['properties']['name'],
        }
      })
      : data ['properties']['price'] !==undefined?
      await this.prisma.product.update({
        where: {
          id:data['id'],
        },
        data:{
          price:data['properties']['price']
        },
      })
      : data ['properties']['description'] !==undefined?
      await this.prisma.product.update({
        where: {
          id:data['id'],
        },
        data:{
          price:data['properties']['description']
        },
      })
      : data['properties']['vendorId'] !== undefined
              ? await this.prisma.product.update({
                where: {
                  id: data['id'],
                },
                data: {
                  vendor: {
                    disconnect: {
                      id: data['vendorId'],
                    },
                  },
                },
              })
              : data['properties']['categoryId'] !== undefined
              ? await this.prisma.product.update({
                where: {
                  id: data['id'],
                },
                data: {
                  category: {
                    disconnect: {
                      id: data['categoryId'],
                    },
                  },
                },
              })
              : new BadRequestException('pass in a valid prop');

          return query      
     } catch (error) {
      throw new BadRequestException(error);
      
     }
  }

  async RemoveProductById(data: string): Promise<Product> {
    try {
     let query = await this.prisma.product.update({
        where:{
          id: data['id'],
        },
        data:{
          vendor:{
            disconnect:{
              id: data['properties']['productId']
            }
          }
        }
        
        
      });
      return query
    } catch (error) {
      throw new BadRequestException(error);
      
    }
  }


 
}
