import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports:[PaymentModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
