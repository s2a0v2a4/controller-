import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];

  findAll(): Message[] {
    return this.messages;
  }

  findOne(id: string): Message {
    const message = this.messages.find(msg => msg.id === id);
    if (!message) {
      throw new NotFoundException(`Nachricht mit ID ${id} nicht gefunden`);
    }
    return message;
  }

  create(createMessageDto: CreateMessageDto): Message {
    const message: Message = {
      id: (Math.random() * 10000).toFixed(0),
      text: createMessageDto.text,
    };
    this.messages.push(message);
    return message;
  }

  update(id: string, updateMessageDto: CreateMessageDto): Message {
    const message = this.findOne(id);
    message.text = updateMessageDto.text;
    return message;
  }

  remove(id: string): void {
    const index = this.messages.findIndex(msg => msg.id === id);
    if (index === -1) {
      throw new NotFoundException(`Nachricht mit ID ${id} nicht gefunden`);
    }
    this.messages.splice(index, 1);
  }
}
