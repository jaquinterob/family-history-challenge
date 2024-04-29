import { Module } from '@nestjs/common';

import { MONGO_CONNECT_LOCAL } from './db/mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { CompetitorModule } from './modules/competitor/competitor.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_CONNECT || MONGO_CONNECT_LOCAL,
      }),
    }),
    CompetitorModule,
    UserModule,
  ],
})
export class AppModule {}
