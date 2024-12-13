import { Category, Review, User } from "@prisma/client";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { FindDto } from "./dto/find-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

 
export interface IProduct {
    CreateProduct(data: CreateProductDto): Promise<Product>;
    GetProducts(data:FindDto): Promise<Product[]>
    GetCategory(data:FindDto): Promise<Category[]>
    FindProductById(data: FindDto): Promise<Product>;
    FindProductByName(data: FindDto): Promise<Product>;
    FindProductByPrice(data: FindDto): Promise<Product>;
  
    FindProductByVendorId(data: FindDto): Promise<Product>;
    FindProductCategoryId(data: FindDto): Promise<Product>;
    FindProductReviews(data: FindDto): Promise<Product[]>;
  
    UpdateProductProperty( data: UpdateProductDto): Promise<Product>;
    
  
    RemoveProductById(data:string): Promise<Product>;
  }
  