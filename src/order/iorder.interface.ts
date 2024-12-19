import { Order } from "@prisma/client";
import { CreateOrderDto } from "./dto/create-order.dto";
import { FindDto } from "./dto/find-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

export  interface IOrder {
    createOrder(data:CreateOrderDto):Promise<Order>
    getOrders(data:FindDto):Promise<Order[]>
    getOrderByPayment(data:FindDto): Promise<Order[]>
    findOrderById(data:FindDto): Promise<Order>
    findOrderByStatus(data:FindDto): Promise<Order>
    getOrderByName(data:FindDto): Promise<Order>
    findOrderByUserId(data:FindDto): Promise<Order>
    updateOrderProperty(date:UpdateOrderDto): Promise<Order>
    removeOrder(data:UpdateOrderDto): Promise<Order>
}

