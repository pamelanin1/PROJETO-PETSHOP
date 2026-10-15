import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty({ message: 'Informe o nome do cliente.' })
  @MaxLength(100)
  nome!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefone?: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe o CPF.' })
  @MaxLength(14)
  cpf!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  endereco?: string;
}
