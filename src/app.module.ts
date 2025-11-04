import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TasksModule } from './tasks/app.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { GamesModule } from './games/games.module';
import { PrismaModule } from './prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [CatsModule, TasksModule, ProjectsModule, AuthModule, UsersModule, HelloModule, GamesModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
