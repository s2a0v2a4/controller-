// import { Controller, Get, Post, Put, Delete, Param, Body, ParseUUIDPipe } from '@nestjs/common';
// import { MessagesService } from './messages.service';
// import { Message } from './entities/message.entity';
// import { CreateMessageDto } from './dto/create-message.dto';

// @Controller('messages')
// export class MessagesController {
//   constructor(private readonly messagesService: MessagesService) {}

//   /**
//    * Gibt alle Nachrichten zurück.
//    */
//   @Get()
//   async findAll(): Promise<Message[]> {
//     return this.messagesService.findAll();
//   }

//   /**
//    * Gibt eine Nachricht anhand der ID zurück.
//    * @param id UUID der Nachricht
//    */
//   @Get(':id')
//   async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Message> {
//     return this.messagesService.findOne(id);
//   }

//   /**
//    * Erstellt eine neue Nachricht.
//    * @param createMessageDto Daten der neuen Nachricht
//    */
//   @Post()
//   async create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
//     return this.messagesService.create(createMessageDto);
//   }

//   /**
//    * Aktualisiert eine bestehende Nachricht.
//    * @param id UUID der Nachricht
//    * @param updateMessageDto Neue Daten
//    */
//   @Put(':id')
//   async update(
//     @Param('id', ParseUUIDPipe) id: string,
//     @Body() updateMessageDto: CreateMessageDto,
//   ): Promise<Message> {
//     return this.messagesService.update(id, updateMessageDto);
//   }

//   /**
//    * Löscht eine Nachricht anhand der ID.
//    * @param id UUID der Nachricht
//    */
//   @Delete(':id')
//   async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
//     return this.messagesService.remove(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('messages') // Swagger-Gruppe
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  @ApiOperation({ summary: 'Alle Aktivitäten abrufen' })
  @ApiResponse({ status: 200, description: 'Liste aller Aktivitäten', type: [Message] })
  findAll(): Message[] {
    return this.messagesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Eine Aktivität anhand der ID abrufen' })
  @ApiParam({ name: 'id', required: true, description: 'ID der Aktivität' })
  @ApiResponse({ status: 200, description: 'Aktivität gefunden', type: Message })
  findOne(@Param('id', new ParseUUIDPipe()) id: string): Message {
    return this.messagesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Neue Aktivität erstellen' })
  @ApiResponse({ status: 201, description: 'Aktivität erfolgreich erstellt', type: Message })
  create(@Body() createMessageDto: CreateMessageDto): Message {
    return this.messagesService.create(createMessageDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Aktivität aktualisieren' })
  @ApiParam({ name: 'id', required: true, description: 'ID der Aktivität' })
  @ApiResponse({ status: 200, description: 'Aktivität aktualisiert', type: Message })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateMessageDto: CreateMessageDto,
  ): Message {
    return this.messagesService.update(id, updateMessageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Aktivität löschen' })
  @ApiParam({ name: 'id', required: true, description: 'ID der Aktivität' })
  @ApiResponse({ status: 204, description: 'Aktivität gelöscht' })
  remove(@Param('id', new ParseUUIDPipe()) id: string): void {
    this.messagesService.remove(id);
  }
}
