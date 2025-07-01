import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}

// Erklärung:

//     Hier definieren wir die Form deiner Eingaben (DTO = Data Transfer Object)

//     class-validator sorgt dafür, dass text und author Pflichtfelder sind und Strings sein müssen