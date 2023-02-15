import { AppDataSource } from "../../typeorm.config"
import { ICadastrarFuncionario, IEditarFuncionario } from "./interface"
import { Funcionario } from "./entidade"


class ModelFuncionario {
    private repositorio = AppDataSource.getRepository(Funcionario)

    async listar() {
        return this.repositorio.find()
    }

    async cadastrar(dados: ICadastrarFuncionario) {
        const { nome, email, cpf, dtNascimento, telefone } = dados
        const funcionario = this.repositorio.create({
            nome, cpf, dtNascimento, email, telefone
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
        return this.repositorio.save(funcionario)
    }

    async excluir(id: number) {
        return this.repositorio.softDelete(id)
    }
}
export { ModelFuncionario }