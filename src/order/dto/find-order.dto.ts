import { ApiProperty } from '@nestjs/swagger';
import { Order, OrderStatus } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';

export class FindDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  properties: {
    orderStatus?: OrderStatus;  // Adding orderStatus if needed
    PaymentId?: string;  // Explicitly add PaymentId if it's not part of Order
  } & Partial<Omit<Order, excluded>>;  // This is for the other fields you want to make optional
}
