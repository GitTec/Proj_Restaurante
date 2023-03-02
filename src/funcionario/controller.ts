import { Request, Response } from "express"
import { ModelFuncionario } from "./model"
import jwt from "jsonwebtoken"
import { compareSync, hashSync } from "bcrypt"

class ControllerFuncionario {

    async listando(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const funcionario = await model.listar();
        return res.json(funcionario)
    }

    async cadastrando(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { nome, email, cpf, dtNascimento, telefone, senha } = req.body
        const senhaCriptografada = hashSync(senha, 8)
        const funcionarioNovo = await model.cadastrar({ nome, email, cpf, dtNascimento, telefone, senha: senhaCriptografada })
        return res.json(funcionarioNovo)
    }

    async editando(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { id } = req.params
        const { nome, email, cpf, dtNascimento, telefone, senha } = req.body
        const senhaCriptografada = hashSync(senha, 8)
        const funcionarioEdit = await model.editar({ nome, email, cpf, dtNascimento, telefone, senha: senhaCriptografada, id: Number(id) })
        return res.json(funcionarioEdit)
    }

    async alterandoSenha(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { id } = req.params
        const { senha } = req.body
        const senhaCriptografada = hashSync(senha, 8)
        const editarSenha = await model.recuperarSenha({ senha: senhaCriptografada, id: Number(id) })
        return res.json(editarSenha)
    }

    async login(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { email, senha } = req.body
        const funcionario = await model.buscarPorEmail(email)
        if (!funcionario) {
            return res.status(401).json("Email ou senha inválidos!!")
        }

        if (!compareSync(senha, funcionario.senha ?? "")) {
            return res.status(401).json("Email ou senha inválidos!!")
        }

        const token = jwt.sign({
            email: funcionario.email,
            id: funcionario.id
        }, process.env.JWT_KEY ?? "", {
            subject: funcionario.email,
            expiresIn: 150
        })
        delete funcionario.senha

        return res.json({
            token,
            funcionario
        })
    }

    async excluindo(req: Request, res: Response) {
        const model = new ModelFuncionario();
        const { id } = req.params
        const funcionarioExc = await model.excluir(Number(id))
        return res.json(funcionarioExc)
    }
}
export { ControllerFuncionario }