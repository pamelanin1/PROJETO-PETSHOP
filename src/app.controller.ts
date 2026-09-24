import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('inicial')
  inicio(): object {
    return {
      titulo: 'Pet Shop',
    };
  }
}
