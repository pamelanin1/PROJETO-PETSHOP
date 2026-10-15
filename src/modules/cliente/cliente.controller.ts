import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dtos/create-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  @Render('cliente/index')
  async listar(): Promise<object> {
    const clientes = await this.clienteService.findAll();
    return { titulo: 'Clientes', clientes };
  }

  @Get('novo')
  @Render('cliente/formulario')
  novo(): object {
    return { titulo: 'Cadastrar cliente', cliente: {}, erro: null };
  }

  @Post('novo')
  async cadastrar(@Body() dados: CreateClienteDto, @Res() resposta: Response): Promise<void> {
    if (await this.clienteService.findByCpf(dados.cpf.trim())) {
      resposta.status(409).render('cliente/formulario', {
        titulo: 'Cadastrar cliente',
        cliente: dados,
        erro: 'Esse CPF já está cadastrado.',
      });
      return;
    }

    await this.clienteService.create(dados);
    resposta.redirect('/clientes');
  }
}
