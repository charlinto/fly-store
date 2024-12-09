import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto  {

@IsNotEmpty()
firstName?: string;

@IsNotEmpty()
lastName?: string;

@IsNotEmpty()
email?: string;

@IsNotEmpty()
password?: string;

@IsNotEmpty()
phone?:string

}
