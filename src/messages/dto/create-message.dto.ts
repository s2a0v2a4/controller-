import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description: string;
}

// Erklärung:

//     Hier definieren wir die Form deiner Eingaben (DTO = Data Transfer Object)

//     class-validator sorgt dafür, dass text und author Pflichtfelder sind und Strings sein müssen