import { Role } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
@IsNotEmpty()
id?: string;

@IsNotEmpty()
firstName : string
@IsNotEmpty()
lastName: string
@IsNotEmpty()
email: string
@IsNotEmpty()
password: string

@IsNotEmpty()
enum:Role

}
