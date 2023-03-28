import { Request, Response } from "express";
import { ModelItem } from "./model";

class ControllerItem {
    async listando(req: Request, res: Response) {
        const model = new ModelItem();
        const item = await model.listar();
        res.json(item)
    }

    async listandoUm(req: Request, res: Response) {
        const { id } = req.params
        const model = new ModelItem();
        const item = await model.buscarPorId(+id);   //+ converte automaticamente uma string para numero
        return res.json(item)
    }

    async cadastrando(req: Request, res: Response) {
        const model = new ModelItem();
        const { nome, valor, detalhes, idCategoria } = req.body
        const filename = req.file?.filename
        const itemNovo = await model.cadastrar({ nome, valor, detalhes, imagem: filename, idCategoria })
        res.json(itemNovo)
    }

    async editando(req: Request, res: Response) {
        const model = new ModelItem();
        const { id } = req.params
        const { nome, valor, detalhes, idCategoria } = req.body
        const filename = req.file?.filename
        const itemEdit = await model.editar({ nome, valor, detalhes, imagem: filename, idCategoria, id: Number(id) })
        res.json(itemEdit)
    }

    async excluindo(req: Request, res: Response) {
        const model = new ModelItem();
        const { id } = req.params
        const itemExc = await model.excluir(Number(id))
        res.json(itemExc)
    }
}
export { ControllerItem }