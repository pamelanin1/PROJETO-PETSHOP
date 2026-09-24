import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { AnimalModule } from './modules/animal/animal.module';

@Module({
  imports: [DatabaseModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
