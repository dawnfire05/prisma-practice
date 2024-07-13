import { Injectable } from '@nestjs/common';
import { Prisma, Chat } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService){}

    async createChat(data: Prisma.ChatCreateInput): Promise<Chat>{
        return this.prisma.chat.create({
            data,
        });
    }
    
}
