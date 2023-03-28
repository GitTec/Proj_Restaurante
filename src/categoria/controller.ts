import { Request, Response } from "express";
import { ModelCategoria } from "./model";

class ControllerCategoria {

    async listando(req: Request, res: Response) {
        const model = new ModelCategoria();
        const categoria = await model.listar();
        res.json(categoria)
    }

    async listandoUm(req: Request, res: Response) {
        const { id } = req.params
        const model = new ModelCategoria();
        const categoria = await model.buscarPorId(+id);   //+ converte automaticamente uma string para numero
        return res.json(categoria)
    }

    async cadastrando(req: Request, res: Response) {
        const model = new ModelCategoria();
        const { nome } = req.body
        const categoriaNovo = await model.cadastrar({ nome });
        res.json(categoriaNovo)
    }

    async editando(req: Request, res: Response) {
        const model = new ModelCategoria();
        const { id } = req.params
        const { nome } = req.body
        const categoriaEdit = await model.editar({ nome, id: Number(id) })
        res.json(categoriaEdit)
    }

    async excluindo(req: Request, res: Response) {
        const model = new ModelCategoria();
        const { id } = req.params
        const categoriaExc = await model.excluir(Number(id))
        res.json(categoriaExc)
    }
}
export { ControllerCategoria }