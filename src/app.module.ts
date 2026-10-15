import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './config/database/database.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { AnimalModule } from './modules/animal/animal.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ClienteModule,
    AnimalModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
