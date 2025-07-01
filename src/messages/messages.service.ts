// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Message } from './entities/message.entity';
// import { CreateMessageDto } from './dto/create-message.dto';
// import { v4 as uuidv4 } from 'uuid';
// import * as fs from 'fs/promises';
// import * as path from 'path';

// @Injectable()
// export class MessagesService {
//   private readonly dataFile = path.join(__dirname, '../../data/messages.json');
//   private messages: Message[] = [];

//   constructor() {
//     this.loadMessages();
//   }

//   private async loadMessages() {
//     try {
//       const data = await fs.readFile(this.dataFile, 'utf-8');
//       this.messages = JSON.parse(data).map((m) => ({
//         ...m,
//         createdAt: new Date(m.createdAt),
//       }));
//     } catch {
//       this.messages = [];
//       await this.saveMessages();
//     }
//   }

//   private async saveMessages() {
//     await fs.writeFile(this.dataFile, JSON.stringify(this.messages, null, 2));
//   }

//   async findAll(): Promise<Message[]> {
//     return this.messages;
//   }

//   async findOne(id: string): Promise<Message> {
//     const message = this.messages.find((m) => m.id === id);
//     if (!message) {
//       throw new NotFoundException(`Message with id ${id} not found`);
//     }
//     return message;
//   }

//   async create(createMessageDto: CreateMessageDto): Promise<Message> {
//     const newMessage: Message = {
//       id: uuidv4(),
//       ...createMessageDto,
//       createdAt: new Date(),
//     };
//     this.messages.push(newMessage);
//     await this.saveMessages();
//     return newMessage;
//   }

//   async update(id: string, updateMessageDto: CreateMessageDto): Promise<Message> {
//     const index = this.messages.findIndex((m) => m.id === id);
//     if (index === -1) {
//       throw new NotFoundException(`Message with id ${id} not found`);
//     }
//     this.messages[index] = {
//       ...this.messages[index],
//       ...updateMessageDto,
//     };
//     await this.saveMessages();
//     return this.messages[index];
//   }

//   async remove(id: string): Promise<void> {
//     const index = this.messages.findIndex((m) => m.id === id);
//     if (index === -1) {
//       throw new NotFoundException(`Message with id ${id} not found`);
//     }
//     this.messages.splice(index, 1);
//     await this.saveMessages();
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  private readonly filePath = path.join(__dirname, '../../data/messages.json');

  constructor() {
    this.loadFromFile();
  }

  private loadFromFile() {
    if (fs.existsSync(this.filePath)) {
      const fileData = fs.readFileSync(this.filePath, 'utf8');
      this.messages = JSON.parse(fileData);
      // Datum als Date-Objekt parsen
      this.messages.forEach(msg => (msg.createdAt = new Date(msg.createdAt)));
    }
  }

  private saveToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.messages, null, 2));
  }

  findAll(): Message[] {
    return this.messages;
  }

  findOne(id: string): Message {
    const message = this.messages.find(m => m.id === id);
    if (!message) throw new NotFoundException(`Message with id ${id} not found`);
    return message;
  }

  create(createMessageDto: CreateMessageDto): Message {
    const newMessage: Message = {
      id: uuidv4(),
      title: createMessageDto.title,
      description: createMessageDto.description,
        author: createMessageDto.author, // ✅
      createdAt: new Date(),
    };
    this.messages.push(newMessage);
    this.saveToFile();
    return newMessage;
  }

  update(id: string, updateMessageDto: CreateMessageDto): Message {
    const message = this.findOne(id);
    message.title = updateMessageDto.title;
    message.description = updateMessageDto.description;
    this.saveToFile();
    return message;
  }

  remove(id: string): void {
    const index = this.messages.findIndex(m => m.id === id);
    if (index === -1) throw new NotFoundException(`Message with id ${id} not found`);
    this.messages.splice(index, 1);
    this.saveToFile();
  }
}
