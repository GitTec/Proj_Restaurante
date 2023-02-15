import env from "dotenv";
import { join } from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";


console.log(join(__dirname, 'migrations', '*.ts'))
env.config();
export const AppDataSource = new DataSource({
    type: 'mysql',
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    logging: true,
    entities: [
        join(__dirname, 'src', '**', 'entidade.ts')//JOIN-Juntar diretorios --- **Pesquisar em * diretorios
    ],
    migrations: [
        join(__dirname, 'migrations', '*.{ts,js}')
    ]
});