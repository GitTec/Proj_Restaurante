import { Router } from "express";
import { ControllerItem } from "./controller";
import multer from "multer"
import { multerConfig } from "../../multer"

const uploadMulter = multer({
    storage: multerConfig
})

const rotasItem = Router();
const controller = new ControllerItem();

rotasItem.get("/", controller.listando);
rotasItem.post("/", uploadMulter.single("imagem"),controller.cadastrando);
rotasItem.put("/:id", uploadMulter.single("imagem"), controller.editando);
rotasItem.delete("/:id", controller.excluindo);

export { rotasItem }