
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class UpdateProductDto  {
         @ApiProperty()
         id: string;
         @ApiProperty()
        @IsNotEmpty() 
        properties: Partial<Product>;

      
}
