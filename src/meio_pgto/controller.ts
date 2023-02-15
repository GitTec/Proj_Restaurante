import { Request, Response } from "express";
import { ModelMeioPagamento } from "./model"

class ControllerMeioPagamento {

    async listando(req: Request, res: Response) {
        const model = new ModelMeioPagamento();
        const meiopgto = await model.listar();
        res.json(meiopgto)
    }

    async cadastrando(req: Request, res: Response) {
        const model = new ModelMeioPagamento();
        const { tipo_pagamento, valor_acrescimos } = req.body
        const meiopgtoNovo = await model.cadastrar({ tipo_pagamento, valor_acrescimos });
        return res.json(meiopgtoNovo)
    }

    async editando(req: Request, res: Response) {
        const model = new ModelMeioPagamento();
        const { id } = req.params
        const { tipo_pagamento, valor_acrescimos } = req.body
        const meiopgtoEdit = await model.editar({ tipo_pagamento, valor_acrescimos, id: Number(id) });
        return res.json(meiopgtoEdit)
    }

    async exlcuindo(req: Request, res: Response) {
        const model = new ModelMeioPagamento();
        const { id } = req.params
        const meiopgtoExc = await model.excluir(Number(id))
        return res.json(meiopgtoExc)
    }
}
export { ControllerMeioPagamento }