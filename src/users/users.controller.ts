import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './Iuser.Interface';
import { User, Order, Product, Profile, Review } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController implements IUser{
  constructor(private readonly usersService: UsersService) {}
  @Get(":id")
  findUserById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Get("firstName/:firstName")
  findUserByFirstName(firstName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Get("lastName/:lastName")
  findUserByLastName(lastName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Get("email/:email")
  findUserByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Get("phone/:phone")
  findUserByPhone(phone: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Get("id/:oders")
  findUserOrders(userId: string): Promise<Array<Order>> {
    throw new Error('Method not implemented.');
  

  }
  @Get("id/:products")
  findUserProducts(userId: string): Promise<Array<Product>> {
    throw new Error('Method not implemented.');
  }
  @Get("id/:Profiles")
  findUserProfiles(userId: string): Promise<Array<Profile>> {
    throw new Error('Method not implemented.');
  }

  @Get("id/:reviews")

  findUserReviews(userId: string): Promise<Array<Review>> {
    throw new Error('Method not implemented.');
  }

  @Patch(':id')
  updateUserById(id: string, data: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Patch("id/:fristName")
  updateUserFirstName(id: string, firstName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  @Patch("id/:lastName")

  updateUserLastName(id: string, lastName: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  @Patch("id/:phone")

  updateUserPhone(id: string, phone: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  @Delete(":id")

  removeUserById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  @Post("")
  createUser(data: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
 

}
