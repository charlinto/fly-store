import { User } from "@prisma/client";

export class findUserDto {
  id:string;
  properties: Partial<User>;
  

}