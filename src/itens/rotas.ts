import { Router } from "express";
import { ControllerItem } from "./controller";
import multer from "multer"
import { multerConfig } from "../../multer"
import { autenticarUsuario } from "../../auth";

const uploadMulter = multer({
    storage: multerConfig
})

const rotasItem = Router();
const controller = new ControllerItem();

rotasItem.get("/", controller.listando);
rotasItem.get("/:id", autenticarUsuario, controller.listandoUm);
rotasItem.post("/", autenticarUsuario, uploadMulter.single("imagem"), controller.cadastrando);
rotasItem.put("/:id", autenticarUsuario, uploadMulter.single("imagem"), controller.editando);
rotasItem.delete("/:id", autenticarUsuario, controller.excluindo);

export { rotasItem }