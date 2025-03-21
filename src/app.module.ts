import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Ajout des importations manquantes
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TodoController } from './todos/todo.controller';
import { TodoService } from './todos/todo.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Correction de l'importation de configModule
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
