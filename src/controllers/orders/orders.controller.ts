import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `Order: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `creando orders`,
      payload,
    };
  }

  @Put(':id')
  edit(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Editando order: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Eliminando Order: ${id}`,
    };
  }
}
