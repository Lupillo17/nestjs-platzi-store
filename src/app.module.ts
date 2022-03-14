import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = '1234567';
const API_KEY_PROD = 'PROD123312';

@Module({
  imports: [HttpModule, UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        const taks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return taks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
