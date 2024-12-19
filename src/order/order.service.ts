import { BadGatewayException, BadRequestException, Body, Injectable, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { FindDto } from 'src/order/dto/find-order.dto';
import { Order, OrderStatus } from '@prisma/client';
import { IOrder } from './iorder.interface';

@Injectable()
export class OrderService implements IOrder {
  constructor(private readonly prisma: PrismaService) {}

  // Helper method to handle common error throwing
  private throwError(message: string, error: any) {
    throw new BadGatewayException(message, error);
  }

  // Create a new order
  async createOrder(data: CreateOrderDto): Promise<Order> {
    try {
      const order = await this.prisma.order.create({
        data: {
          orderStatus: data.orderStatus,
          paymentStatus: data.paymentStatus,
          totalAmount: data.totalAmount,
          shippingAddr: data.shippingAddr,
          billingAddr: data.billingAddr,
          userId: data.userId,
        },
        include: {
          orderItems: true,
          payments: true,
        },
      });
      return order;
    } catch (error) {
      this.throwError('Error creating order', error);
    }
  }

  // Get orders by ID
  async getOrders(data: FindDto): Promise<Order[]> {
    try {
      const orders = await this.prisma.order.findMany({
        where: {
          id: data.id,
        },
      });
      return orders;
    } catch (error) {
      this.throwError('Error fetching orders', error);
    }
  }

  // Get orders by payment
  async getOrderByPayment( data: FindDto): Promise<Order[]> {
    try {
      const orders = await this.prisma.order.findMany({
        where: {
          id: data.id,
          payments: {
            some: {
              id: data.properties.PaymentId,
            },
          },
        },
      });
      return orders;
    } catch (error) {
      this.throwError('Error fetching orders by payment', error);
    }
  }

 
  
  // Find order by status
  async findOrderByStatus(data: FindDto): Promise<Order> {
    try {
      const order = await this.prisma.order.findFirstOrThrow({
        where: {
          id: data.id,
          orderStatus: data.properties.orderStatus,
        },
      });
      return order;
    } catch (error) {
      this.throwError('Error finding order by status', error);
    }
  }

  // Find order by ID
  async findOrderById( data: FindDto): Promise<Order> {
    try {
      const order = await this.prisma.order.findFirstOrThrow({
        where: {
          id: data.id,
        },
      });
      return order;
    } catch (error) {
      this.throwError('Error finding order by ID', error);
    }
  }

  // Get order by user and name
  async getOrderByName(data: FindDto): Promise<Order> {
    try {
      const order = await this.prisma.order.findFirst({
        where: {
          id: data.id,
          userId: data.properties.userId,
        },
      });
      return order;
    } catch (error) {
      this.throwError('Error fetching order by name', error);
    }
  }

  // Find order by user ID
  async findOrderByUserId(data: FindDto): Promise<Order> {
    try {
      const order = await this.prisma.order.findFirstOrThrow({
        where: {
          id: data.id,
        },
      });
      return order;
    } catch (error) {
      this.throwError('Error finding order by user ID', error);
    }
  }

  // Update order properties
  async updateOrderProperty(data: UpdateOrderDto): Promise<Order> {
    try {
      const updatedOrder = await this.prisma.order.update({
        where: { id: data.id },
        data: data.properties,
      });
      return updatedOrder;
    } catch (error) {
      this.throwError('Error updating order properties', error);
    }
  }

  // Remove order and cancel it
  async removeOrder(data: UpdateOrderDto): Promise<Order> {
    if (!data.id) {
      throw new BadRequestException('Order ID is required.');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: data.id },
    });

    if (!order) {
      throw new BadRequestException(`Order with ID ${data.id} does not exist.`);
    }

    try {
      const updatedOrder = await this.prisma.order.update({
        where: { id: data.id },
        data: {
          orderStatus: 'CANCELLED',
        },
      });
      return updatedOrder;
    } catch (error) {
      this.throwError('Error cancelling the order', error);
    }
  }
}
