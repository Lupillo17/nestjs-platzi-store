import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private task: any[],
    @Inject('MONGO') private database: Db,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.configService.apikey;
    const dbName = this.configService.database.name;
    return `Hello World! ${apiKey}, ${dbName}`;
  }
  getTasks() {
    const tasksCollection = this.database.collection('tasks');
    return tasksCollection.find().toArray();
  }
}
