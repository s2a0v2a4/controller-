// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



// import { Module } from '@nestjs/common';
// import { MessagesModule } from './messages/messages.module';

// @Module({
//   imports: [MessagesModule],
// })
// export class AppModule {}



// import { Module } from '@nestjs/common';
// import { MessagesController } from './messages/messages.controller';
// import { MessagesService } from './messages/messages.service';

// @Module({
//   imports: [],
//   controllers: [MessagesController],
//   providers: [MessagesService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
})
export class AppModule {}
