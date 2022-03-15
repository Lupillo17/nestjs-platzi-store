import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dtos';
import { ProductsService } from '../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('')
  @ApiOperation({ summary: 'List of products' })
  getPagination(
    @Query('limit') limit = 100,
    @Query('offset') offset = 5,
    @Query('brand') brand: string,
  ) {
    console.log(limit, offset, brand);
    return this.productsService.findAll();
  }

  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':id')
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion para crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateProductDto,
  ) {
    // return {
    //   message: `Editando producto: ${id}`,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.remove(id);
  }
}
