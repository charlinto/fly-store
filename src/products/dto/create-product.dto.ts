import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()

  price: string;

  @IsNotEmpty()
  @IsString()

  vendorId: string;

  @IsNotEmpty()
  @IsString()

  categoryId: string;
}
