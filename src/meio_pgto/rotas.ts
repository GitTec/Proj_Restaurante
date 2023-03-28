import { Router } from "express";
import { autenticarUsuario } from "../../auth";
import { ControllerMeioPagamento } from "./controller";

const rotasMeioPgto = Router();
const controller = new ControllerMeioPagamento();

rotasMeioPgto.get("/", controller.listando);
rotasMeioPgto.get("/:id", autenticarUsuario, controller.listandoUm);
rotasMeioPgto.post("/", autenticarUsuario, controller.cadastrando);
rotasMeioPgto.put("/:id", autenticarUsuario, controller.editando);
rotasMeioPgto.delete("/:id", autenticarUsuario, controller.exlcuindo);

export { rotasMeioPgto }