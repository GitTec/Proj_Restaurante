import { Router } from "express";
import { autenticarUsuario } from "../../auth";
import { ControllerFuncionario } from "./controller";

const rotasFuncionario = Router();
const controller = new ControllerFuncionario();

rotasFuncionario.get("/", autenticarUsuario, controller.listando);
rotasFuncionario.post("/", autenticarUsuario, controller.cadastrando);
rotasFuncionario.put("/:id", autenticarUsuario, controller.editando);
rotasFuncionario.patch("/recuperarSenha/:id", controller.alterandoSenha);
rotasFuncionario.post("/login", controller.login)
rotasFuncionario.delete("/:id", autenticarUsuario, controller.excluindo);

export { rotasFuncionario }