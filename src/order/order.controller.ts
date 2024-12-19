import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { IOrder } from './iorder.interface';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';
import { FindDto } from 'src/order/dto/find-order.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('order')
@ApiTags('order')

export class OrderController implements IOrder {
  constructor(private readonly order: OrderService) {}

  
  @Post('createOrder')
  createOrder(@Body()data: CreateOrderDto): Promise<Order> {
    return this.order.createOrder(data)

  }

@Get('orders')
getOrders(@Body()data: FindDto): Promise<Order[]> {
    return this.order.getOrders(data)

  }
  @Get('orderPayment')
  getOrderByPayment(@Body() data: FindDto): Promise<Order[]> {
    return this.order.getOrderByPayment(data)

  }

 

  @Get('FindOrderById')
  findOrderById(@Body()data: FindDto): Promise<Order> {
    return this.order.findOrderById(data)

  }
 @Get('')
 findOrderByStatus(@Body()data:FindDto):Promise<Order>{
  return this.order.findOrderById(data)

 }


  @Get('GetOrderByName')
  getOrderByName(@Body()data: FindDto): Promise<Order> {
    return this.order.getOrderByName(data)

  }

  @Get('FindOrderByUserId')
  findOrderByUserId(@Body()data: FindDto): Promise<Order> {
    return this.order.findOrderByUserId(data)

  }

 

  @Patch('UpdateOrderProperty')
  updateOrderProperty(@Body()data: UpdateOrderDto): Promise<Order> {
    return this.order.updateOrderProperty(data)

  }
  @Post('RemoveOrder')
  removeOrder(@Body()data: UpdateOrderDto): Promise<Order> {
    return this.order.removeOrder(data)

  }



}
