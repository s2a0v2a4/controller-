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

// import { ApiProperty } from '@nestjs/swagger';

// export class Message {
//   @ApiProperty({ example: 'a1b2c3d4', description: 'Eindeutige ID der Aktivität' })
//   id: string;

//   @ApiProperty({ example: 'Spazieren im Park', description: 'Text oder Beschreibung' })
//   text: string;

//   @ApiProperty({ example: 'Max Mustermann', description: 'Ersteller der Aktivität' })
//   author: string;

//   @ApiProperty({ example: '2025-07-01T18:00:00.000Z', description: 'Erstellungsdatum' })
//   createdAt: Date;
// }
import { ApiProperty } from '@nestjs/swagger';

export class Message {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  createdAt: Date;
}
