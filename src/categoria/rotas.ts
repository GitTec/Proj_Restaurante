import { Router } from "express";
import { autenticarUsuario } from "../../auth";
import { ControllerCategoria } from "./controller";

const rotasCategoria = Router();
const controller = new ControllerCategoria();

rotasCategoria.get("/", controller.listando);
rotasCategoria.get("/:id", controller.listandoUm);
rotasCategoria.post("/", autenticarUsuario, controller.cadastrando);
rotasCategoria.put("/:id", autenticarUsuario, controller.editando);
rotasCategoria.delete("/:id", autenticarUsuario, controller.excluindo);

export { rotasCategoria }