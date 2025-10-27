import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TasksModule } from './tasks/app.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';


@Module({
  imports: [CatsModule, TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
