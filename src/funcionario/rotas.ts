import { Router } from "express";
import { ControllerFuncionario } from "./controller";

const rotasFuncionario = Router();
const controller = new ControllerFuncionario();

rotasFuncionario.get("/", controller.listando);
rotasFuncionario.post("/", controller.cadastrando);
rotasFuncionario.put("/:id", controller.editando);
rotasFuncionario.delete("/:id", controller.excluindo);

export { rotasFuncionario }