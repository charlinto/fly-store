import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './Iuser.Interface';
import { User, Order, Address, Product, Profile, Review } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController implements IUser{
  constructor(private readonly usersService: UsersService) {}
  findUserById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findUserByFirstName(firstName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findUserByLastName(lastName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findUserByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findUserByPhone(phone: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findUserOrders(userId: string): Promise<Array<Order>> {
    throw new Error('Method not implemented.');
  }
  findUserAddresses(userId: string): Promise<Array<Address>> {
    throw new Error('Method not implemented.');
  }
  findUserProducts(userId: string): Promise<Array<Product>> {
    throw new Error('Method not implemented.');
  }
  findUserProfiles(userId: string): Promise<Array<Profile>> {
    throw new Error('Method not implemented.');
  }
  findUserReviews(userId: string): Promise<Array<Review>> {
    throw new Error('Method not implemented.');
  }
  updateUserById(id: string, data: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  updateUserFirstName(id: string, firstName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  updateUserLastName(id: string, lastName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  updateUserPhone(id: string, phone: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  removeUserById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  createUser(data: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  FindUserById(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  FindUserByFirstName(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  FindUserByLastName(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  FindUserByEmail(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  FindUserByPhone(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  FindUserByOrder(data: any): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }
  FindUserByAddress(data: any): Promise<Address[]> {
    throw new Error('Method not implemented.');
  }
  FindUserByProduct(data: any): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  FindUserByProfile(data: any): Promise<Profile[]> {
    throw new Error('Method not implemented.');
  }
  FindUserByReviews(data: any): Promise<Review[]> {
    throw new Error('Method not implemented.');
  }
  UpdateUserById(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  UpdateUserFirstName(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  UpdateUserLastName(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  UpdateUserPhone(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
  RemoveUserBId(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }




}
