import { AppDataSource } from "../../typeorm.config"
import { Itens } from "./entidade"
import { ICadastrarItem, IEditarItem } from "./interface"


class ModelItem {
    private repositorio = AppDataSource.getRepository(Itens)

    async listar() {
        return this.repositorio.find({
            relations: ["categoria"]
        })
    }

    async buscarPorId(id: number) {
        return this.repositorio.findOne({
            where: {
                id
            }
        })
    }

    async cadastrar(dados: ICadastrarItem) {
        const { nome, valor, detalhes, imagem, idCategoria } = dados
        const item = this.repositorio.create({
            nome, valor, detalhes, imagem, idCategoria
        })
        return this.repositorio.save(item)
    }

    async editar(dados: IEditarItem) {
        const item = await this.repositorio.findOneOrFail({
            where: {
                id: dados.id
            }
        })
        item!.nome = dados.nome
        item!.valor = dados.valor
        item!.detalhes = dados.detalhes
        item!.imagem = dados.imagem ?? ""
        item!.idCategoria = dados.idCategoria
        return this.repositorio.save(item)
    }

    async excluir(id: number) {
        return this.repositorio.softDelete(id)
    }
}
export { ModelItem }