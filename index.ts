import express from "express";
import { AppDataSource } from "./typeorm.config";
import "reflect-metadata"
import env from "dotenv"
import { rotasMeioPgto } from "./src/meio_pgto/rotas";
import { rotasCategoria } from "./src/categoria/rotas";
import { rotasFuncionario } from "./src/funcionario/rotas";
import { rotasItem } from "./src/itens/rotas";

env.config()
AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
        return res.send("<h1>Aplicação Restaurant dando inicio!!</h1>")
    });

    app.use("/uploads", express.static("./uploads"))
    app.use("/meiopgtos", rotasMeioPgto)
    app.use("/categorias", rotasCategoria)
    app.use("/funcionarios", rotasFuncionario)
    app.use("/itens", rotasItem)

    app.listen(8000, () => {
        console.log("Servidor iniciado com sucesso!!")
    });

}).catch((err) => {
    console.log(err)
})

