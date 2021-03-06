import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quiz/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'welcome1',
  database: 'quiz',
  entities: [Quiz],
  synchronize: true,
}
