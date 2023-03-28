import { AppDataSource } from "../../typeorm.config"
import { ICadastrarFuncionario, IEditarFuncionario, IRecuperarSenha } from "./interface"
import { Funcionario } from "./entidade"

class ModelFuncionario {
    private repositorio = AppDataSource.getRepository(Funcionario)

    async listar() {
        return this.repositorio.find()
    }

    async buscarPorId(id: number) {
        return this.repositorio.findOne({
            where: {
                id
            }
        })
    }

    async cadastrar(dados: ICadastrarFuncionario) {
        const { nome, email, cpf, dtNascimento, telefone, senha } = dados
        const funcionario = this.repositorio.create({
            nome, cpf, dtNascimento, email, telefone, senha
        })
        return this.repositorio.save(funcionario)
    }

    async editar(dados: IEditarFuncionario) {
        const funcionario = await this.repositorio.findOneOrFail({
            where: {
                id: dados.id
            }
        })
        funcionario!.nome = dados.nome
        funcionario!.cpf = dados.cpf
        funcionario!.dtNascimento = dados.dtNascimento
        funcionario!.email = dados.email
        funcionario!.telefone = dados.telefone
        funcionario!.senha = dados.senha
        return this.repositorio.save(funcionario)
    }

    async recuperarSenha(dados: IRecuperarSenha) {
        const funcionario = await this.repositorio.findOneOrFail({
            where: {
                id: dados.id
            }
        })
        funcionario!.senha = dados.senha
        return this.repositorio.save(funcionario)
    }

    async buscarPorEmail(email: string) {
        return this.repositorio.findOne({
            where: {
                email
            }
        })
    }

    async excluir(id: number) {
        return this.repositorio.softDelete(id)
    }
}
export { ModelFuncionario }