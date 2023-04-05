import { Router } from "express";
import { autenticarUsuario } from "../../auth";
import { ControllerVenda } from "./controller";

const rotasVenda = Router();
const controller = new ControllerVenda();

rotasVenda.get("/", autenticarUsuario, controller.listando);
rotasVenda.get("/:id", autenticarUsuario, controller.listandoUm);
rotasVenda.post("/", autenticarUsuario, controller.cadastrando);
rotasVenda.put("/", autenticarUsuario, controller.editando);
rotasVenda.delete("/:id", autenticarUsuario, controller.excluindo);

export { rotasVenda }