import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
 imports: [
    TypeOrmModule.forFeature([]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mastermind',
      entities: ['dist/**/**.entity{.ts,.js}'],
      logging: true,
      synchronize: true,
    }),ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
