import { Request, Response } from "express"
import { ModelVenda } from "./model"

class ControllerVenda {

    async listando(req: Request, res: Response) {
        const model = new ModelVenda();
        const venda = await model.listar();
        return res.json(venda)
    }

    async listandoUm(req: Request, res: Response) {
        const { id } = req.params
        const model = new ModelVenda();
        const venda = await model.buscarPorId(+id);   //+ converte automaticamente uma string para numero
        return res.json(venda)
    }

    async cadastrando(req: Request, res: Response) {
        const model = new ModelVenda();
        const { nomeCliente, telefone, endereco, idTipoPagamento } = req.body
        const vendaNovo = await model.cadastrar({ nomeCliente, telefone, endereco, idTipoPagamento })
        return res.json(vendaNovo)
    }

    async editando(req: Request, res: Response) {
        const model = new ModelVenda();
        const { id } = req.params
        const { nomeCliente, telefone, endereco, idTipoPagamento } = req.body
        const vendaEdit = await model.editar({ nomeCliente, telefone, endereco, idTipoPagamento, id: Number(id) })
        return res.json(vendaEdit)
    }

    async excluindo(req: Request, res: Response) {
        const model = new ModelVenda();
        const { id } = req.params
        const vendaExc = await model.excluir(Number(id))
        return res.json(vendaExc)
    }
}
export { ControllerVenda }