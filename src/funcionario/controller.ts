import { Request, Response } from "express"
import { ModelFuncionario } from "./model"

class ControllerFuncionario {

    async listando(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const funcionario = await model.listar();
        return res.json(funcionario)
    }

    async cadastrando(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { nome, email, cpf, dtNascimento, telefone } = req.body
        const funcionarioNovo = await model.cadastrar({ nome, email, cpf, dtNascimento, telefone })
        return res.json(funcionarioNovo)
    }

    async editando(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { id } = req.params
        const { nome, email, cpf, dtNascimento, telefone } = req.body
        const funcionarioEdit = await model.editar({ nome, email, cpf, dtNascimento, telefone, id: Number(id) })
        return res.json(funcionarioEdit)
    }

    async excluindo(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { id } = req.params
        const funcionarioExc = await model.excluir(Number(id))
        return res.json(funcionarioExc)
    }
}
export { ControllerFuncionario }