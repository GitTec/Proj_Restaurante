import { Router } from "express";
import { ControllerMeioPagamento } from "./controller";

const rotasMeioPgto = Router();
const controller = new ControllerMeioPagamento();

rotasMeioPgto.get("/", controller.listando);
rotasMeioPgto.post("/", controller.cadastrando);
rotasMeioPgto.put("/:id", controller.editando);
rotasMeioPgto.delete("/:id", controller.exlcuindo);

export { rotasMeioPgto }