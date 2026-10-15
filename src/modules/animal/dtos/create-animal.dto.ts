import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty({ message: 'Informe o nome do animal.' })
  @MaxLength(100)
  nome!: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe a raça.' })
  @MaxLength(100)
  raca!: string;

  @IsIn(['Pequeno', 'Médio', 'Grande'])
  porte!: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe a espécie.' })
  @MaxLength(50)
  especie!: string;

  @IsIn(['Macho', 'Fêmea'])
  sexo!: string;

  @Type(() => Number)
  @IsInt({ message: 'A idade deve ser um número inteiro.' })
  @Min(0)
  idade!: number;

  @Type(() => Number)
  @IsInt({ message: 'Selecione um cliente cadastrado.' })
  @Min(1)
  clienteID!: number;
}
