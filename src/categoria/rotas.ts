import { Router } from "express";
import { ControllerCategoria } from "./controller";

const rotasCategoria = Router();
const controller = new ControllerCategoria();

rotasCategoria.get("/", controller.listando);
rotasCategoria.post("/", controller.cadastrando);
rotasCategoria.put("/:id", controller.editando);
rotasCategoria.delete("/:id", controller.excluindo);

export { rotasCategoria }