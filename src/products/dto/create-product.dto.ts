import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString} from 'class-validator';


export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty()
  images?: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  vendorId?: string;



  @ApiProperty()
  @IsNotEmpty()
  @IsString()

  categoryId?: string;
}
