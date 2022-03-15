import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import config from 'src/config';

const API_KEY = '1234567';
const API_KEY_PROD = 'PROD123312';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, pass, host, port, dbName } =
          configService.mongo;
        const uri = `${connection}://${user}:${pass}@${host}:${port}/?authSource=admin&readPreference=primary`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(`${dbName}`);
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
