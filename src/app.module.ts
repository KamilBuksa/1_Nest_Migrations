import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticlesModule } from './articles/articles.module';
import appConfig from './config/app.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig], // 👈

    }),
    TypeOrmModule.forRootAsync({ // 👈
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ArticlesModule,

    // test




    // test


  ],
})
export class AppModule {
}

