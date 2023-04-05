import { AppDataSource } from "../../typeorm.config"
import { ICadastrarVenda, IEditarVenda } from "./interface"
import { Venda } from "./entidade"

class ModelVenda {
    private repositorio = AppDataSource.getRepository(Venda)

    async listar() {
        return this.repositorio.find({
            relations: ["tipoPagamento", "produtos", "produtos.produto"]
        })
    }

    async buscarPorId(id: number) {
        return this.repositorio.findOne({
            where: {
                id
            }
        })
    }

    async cadastrar(dados: ICadastrarVenda) {
        const { nomeCliente, endereco, telefone, idTipoPagamento } = dados
        const venda = this.repositorio.create({
            nomeCliente, endereco, telefone, idTipoPagamento
        })
        return this.repositorio.save(venda)
    }

    async editar(dados: IEditarVenda) {
        const venda = await this.repositorio.findOneOrFail({
            where: {
                id: dados.id
            }
        })
        venda!.nomeCliente = dados.nomeCliente
        venda!.telefone = dados.telefone
        venda!.endereco = dados.endereco
        venda!.idTipoPagamento = dados.idTipoPagamento
        return this.repositorio.save(venda)
    }

    async excluir(id: number) {
        return this.repositorio.softDelete(id)
    }
}
export { ModelVenda }