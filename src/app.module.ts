import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsService } from './services/products/products.service';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { CustomersService } from './services/customers/customers.service';
import { OrdersService } from './services/orders/orders.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    CustomersController,
    OrdersController,
    BrandsController,
  ],
  providers: [
    AppService,
    ProductsService,
    BrandsService,
    CategoriesService,
    CustomersService,
    OrdersService,
  ],
})
export class AppModule {}
