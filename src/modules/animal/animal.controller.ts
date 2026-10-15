import { Body, Controller, Get, NotFoundException, Post, Render, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AnimalService } from './animal.service';
import { ClienteService } from '../cliente/cliente.service';
import { CreateAnimalDto } from './dtos/create-animal.dto';

@Controller('animais')
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService,
    private readonly clienteService: ClienteService,
  ) {}

  @Get()
  @Render('animal/index')
  async listar(): Promise<object> {
    const animais = await this.animalService.findAll();
    return { titulo: 'Animais', animais };
  }

  @Get('novo')
  @Render('animal/formulario')
  async novo(): Promise<object> {
    const clientes = await this.clienteService.findAllByName();
    return { titulo: 'Cadastrar animal', animal: {}, clientes, erro: null };
  }

  @Post('novo')
  async cadastrar(@Body() dados: CreateAnimalDto, @Res() resposta: Response): Promise<void> {
    try {
      await this.animalService.create(dados);
      resposta.redirect('/animais');
    } catch (erro) {
      if (erro instanceof NotFoundException) {
        resposta.status(400).render('animal/formulario', {
          titulo: 'Cadastrar animal',
          animal: dados,
          clientes: await this.clienteService.findAllByName(),
          erro: 'O dono selecionado não foi encontrado. Cadastre ou selecione outro cliente.',
        });
        return;
      }
      throw erro;
    }
  }
}
