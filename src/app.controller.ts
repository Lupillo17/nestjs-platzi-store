import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `Hola mundo!`;
  }

  @Get('nuevo')
  newEndPoint() {
    return `yo soy nuevo`;
  }

  @Get('/ruta/')
  hello() {
    return `con /sas/`;
  }

  @Get('/products/:id')
  getProduct(@Param('id') id: string) {
    return `Product: ${id}`;
  }

  @Get('/products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 5,
    @Query('brand') brand: string,
  ) {
    return `Product => Limit: ${limit}, Offset: ${offset}, Brand: ${brand} `;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Product: ${productId}, and Id: ${id}`;
  }
}
