


import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Article } from './src/articles/entities/article.entity';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    // entities: [Article],
    // migrations: ['migrations/**'],


    // take from dist folder
    // entities: [`**/*.entity.ts`],
    // migrations: [`dist/migrations/*{.ts,.js}`],


    // entities: ["src/**/*.entity.ts"],
    // migrations: ["src/migrations/*.ts"],
    synchronize: false,
    // 

    entities: [`dist/**/*.entity{.ts,.js}`],
    migrations: [`dist/migrations/*{.ts,.js}`]
});


// 1 . GENERATE
// npm run typeorm:generate-migration --name=AritcleItems

// 2 RUN 
// npm run typeorm:run-migrations

// 3 REVERT
// npm run typeorm:revert-migration

// 4. CREATE
// npm run typeorm:create-migration --name=PostCreationDate          
