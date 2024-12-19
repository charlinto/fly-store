
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class UpdateOrderDto  {
         @ApiProperty()
         id: string;
         @ApiProperty()
        @IsNotEmpty() 
        properties: Partial<Order>;

      
}
