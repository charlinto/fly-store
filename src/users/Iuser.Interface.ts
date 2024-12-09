import { Address, Order, Product, Profile, Review, User } from "@prisma/client";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

 
export interface IUser {
    createUser(data: CreateUserDto): Promise<User>;
  
    findUserById(id: string): Promise<User>;
    findUserByFirstName(firstName: string): Promise<User>;
    findUserByLastName(lastName: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    findUserByPhone(phone: string): Promise<User>;
  
    findUserOrders(userId: string): Promise<Array<Order>>;
    findUserAddresses(userId: string): Promise<Array<Address>>;
    findUserProducts(userId: string): Promise<Array<Product>>;
    findUserProfiles(userId: string): Promise<Array<Profile>>;
    findUserReviews(userId: string): Promise<Array<Review>>;
  
    updateUserById(id: string, data: UpdateUserDto): Promise<User>;
    updateUserFirstName(id: string, firstName: string): Promise<User>;
    updateUserLastName(id: string, lastName: string): Promise<User>;
    updateUserPhone(id: string, phone: string): Promise<User>;
  
    removeUserById(id: string): Promise<User>;
  }
  