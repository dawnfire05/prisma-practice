import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    //post
    async createUser(data: Prisma.UserCreateInput): Promise<User>{
        return this.prisma.user.create({
            data,
        });
    }

    //get
    async getUsers(): Promise<User[]>{
        return this.prisma.user.findMany();
    }

    //get
    async getUserById(id: number): Promise<User | null>{
        return this.prisma.user.findUnique({
            where: {id},
        });
    }

    //put
    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>{
        return this.prisma.user.update({
            where:{id},
            data,
        });
    }

    //delete
    async deleteUser(id: number): Promise<User>{
        return this.prisma.user.delete({
            where: {id},
        });
    }


}
