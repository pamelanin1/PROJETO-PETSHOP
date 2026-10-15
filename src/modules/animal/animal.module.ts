import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { ClienteModule } from '../cliente/cliente.module';

@Module({
  imports: [ClienteModule],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
