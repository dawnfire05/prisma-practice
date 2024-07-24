import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ChatService } from './chat/chat.service';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [PrismaModule, UserModule, ChatModule, TestModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class AppModule {}
