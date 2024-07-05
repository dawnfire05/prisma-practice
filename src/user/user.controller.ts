import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel} from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() userData: Prisma.UserCreateInput): Promise<UserModel>{
        return this.userService.createUser(userData);
    }

    @Get()
    async getUsers(): Promise<UserModel[]>{
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id : number): Promise<UserModel>{
        return this.userService.getUserById(id);
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id : number, @Body() userData : Prisma.UserUpdateInput) : Promise<UserModel>{
        return this.userService.updateUser(id, userData);
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModel>{
        return this.userService.deleteUser(id);
    }

}
