import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      message: `Category: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `creando categories`,
      payload,
    };
  }

  @Put(':id')
  edit(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Editando category: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Eliminando Category: ${id}`,
    };
  }
}
