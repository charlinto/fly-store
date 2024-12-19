import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus, PaymentStatus } from "@prisma/client";
import { IsNotEmpty } from "class-validator";




export class  CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    id?: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsNotEmpty()
    orderStatus: OrderStatus;
    @ApiProperty()
    @IsNotEmpty()
    paymentStatus: PaymentStatus;
    @ApiProperty()
    @IsNotEmpty()
    totalAmount: number;
    @ApiProperty()
    @IsNotEmpty()
    shippingAddr: string;
    @ApiProperty()
    @IsNotEmpty()
    billingAddr: string
    @ApiProperty()
    @IsNotEmpty()
    userId: string;
  }
  

