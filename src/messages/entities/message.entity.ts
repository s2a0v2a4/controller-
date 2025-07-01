// import { IsNotEmpty, IsString } from 'class-validator';

// export class CreateMessageDto {
//   @IsString()
//   @IsNotEmpty()
//   text: string;

//   @IsString()
//   @IsNotEmpty()
//   author: string;
// }

// export class Message {
//   id: string;
//   text: string;
//   author: string;
//   createdAt: Date;
// }
// Erklärung:

//     So sieht eine Nachricht im Speicher aus – mit ID, Text, Autor und Erstellungsdatum


export class Message {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
