import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('animais')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  @Render('animal/index')
  async listar() {
    const animais = await this.animalService.findAll();
    return { title: 'Animais', animais };
  }

  @Get('novo')
  @Render('animal/novo')
  novo() {
    return { title: 'Cadastrar animal' };
  }

  @Post()
  @Redirect('/animais')
  async cadastrar(@Body() dados: any) {
    await this.animalService.create({
      nome: dados.nome,
      raca: dados.raca,
      porte: dados.porte,
      especie: dados.especie,
      sexo: dados.sexo,
      idade: Number(dados.idade),
    });
  }
}
