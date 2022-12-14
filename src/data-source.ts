import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./entity/Category";
import { Video } from "./entity/Video";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Category, Video],
  migrations: [],
  subscribers: [],
});
