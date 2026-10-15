import { Test } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import expressEjsLayouts from 'express-ejs-layouts';
import request from 'supertest';
import { AppController } from '../src/app.controller';

describe('Página inicial (e2e)', () => {
  let app: NestExpressApplication;

  beforeAll(async () => {
    const modulo = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
    app = modulo.createNestApplication<NestExpressApplication>();
    app.setBaseViewsDir(join(process.cwd(), 'views'));
    app.setViewEngine('ejs');
    app.use(expressEjsLayouts);
    app.set('layout', 'layouts/main');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('exibe a tela do Pet Shop', async () => {
    const resposta = await request(app.getHttpServer()).get('/').expect(200);
    expect(resposta.text).toContain('Sistema Pet Shop');
  });
});
