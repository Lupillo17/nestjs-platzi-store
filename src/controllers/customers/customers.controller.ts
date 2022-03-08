import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      message: `Customer: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `creando customers`,
      payload,
    };
  }

  @Put(':id')
  edit(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Editando customers: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Eliminando Customer: ${id}`,
    };
  }
}
