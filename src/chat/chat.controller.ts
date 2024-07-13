import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat as ChatModel, Prisma } from '@prisma/client';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService){}

    @Post()
    async createChat(@Body() chatData: Prisma.ChatCreateInput): Promise<ChatModel>{
        return this.chatService.createChat(chatData)
    }
}
