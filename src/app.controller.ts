import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('main')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndPoint() {
    return `yo soy nuevo`;
  }

  @Get('/ruta/')
  hello() {
    return `con /sas/`;
  }
  @Get('/tasks/')
  getTasks() {
    return this.appService.getTasks();
  }
}
