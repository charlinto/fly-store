import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';

export class FindDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  properties: Partial<Omit<Product, excluded>>;
}
