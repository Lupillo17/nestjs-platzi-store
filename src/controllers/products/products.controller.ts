import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }
  @Get('')
  getPagination(
    @Query('limit') limit = 100,
    @Query('offset') offset = 5,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `Product => Limit: ${limit}, Offset: ${offset}, Brand: ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    // response.status(200).send({
    //   message: `Product: ${id}`,
    // });
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion para crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   message: `Editando producto: ${id}`,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
