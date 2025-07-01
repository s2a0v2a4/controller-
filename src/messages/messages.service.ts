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
    if (!message) throw new NotFoundException(`Postkarte mit ID ${id} nicht gefunden!`);
    return message;
  }

  create(createMessageDto: CreateMessageDto): Message {
    const newMessage: Message = {
      id: (Math.random() * 1000000).toFixed(0),
      text: createMessageDto.text,
      author: createMessageDto.author,
      createdAt: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  update(id: string, updateMessageDto: CreateMessageDto): Message {
    const message = this.findOne(id);
    message.text = updateMessageDto.text;
    message.author = updateMessageDto.author;
    return message;
  }

  remove(id: string): void {
    const index = this.messages.findIndex(msg => msg.id === id);
    if (index === -1) throw new NotFoundException(`Postkarte mit ID ${id} nicht gefunden!`);
    this.messages.splice(index, 1);
  }
}


// Erklärung:

//     create() erstellt neue Nachrichten mit ID & Datum

//     findOne() findet Nachricht oder wirft Fehler

//     update() ändert text und author

//     remove() löscht die Nachricht oder wirft Fehler