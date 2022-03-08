import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      message: `Brand: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `creando brands`,
      payload,
    };
  }

  @Put(':id')
  edit(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Editando Brand: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Eliminando Brand: ${id}`,
    };
  }
}
