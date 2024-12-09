import { Category, Review, User } from "@prisma/client";
import { Product } from "./entities/product.entity";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { CreateProductDto } from "./dto/create-product.dto";

 
export interface iproducts {
    createProduct(data: CreateProductDto): Promise<Product>;
  
    findProductById(id: string): Promise<Product>;
    findProductName(name: string): Promise<Product>;
    findProductByPrice(price: string): Promise<Product>;
  
    findProductByvendor(vendorId: string): Promise<Array<User>>;
    findProductCategory(categoryId: string): Promise<Array<Category>>;
    findProductReviews(productId: string): Promise<Array<Review>>;
  
    updateProductById(id: string, data: UpdateUserDto): Promise<Product>;
    updateProductName(id: string, name: string): Promise<Product>;
    updateProductPrice(id: string, price: string): Promise<Product>;
  
    removeProductById(id: string): Promise<Product>;
  }
  