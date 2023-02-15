import { AppDataSource } from "../../typeorm.config";
import { Categoria } from "./entidade";
import { ICadastrarCategoria, IEditarCategoria } from "./interface";

class ModelCategoria {
    private repositorio = AppDataSource.getRepository(Categoria)

    async listar() {
        return this.repositorio.find({
            relations: ["itens"]
        })
    }

    async cadastrar(dados: ICadastrarCategoria) {
        const { nome } = dados
        const categoria = this.repositorio.create({
            nome
        })
        return this.repositorio.save(categoria)
    }

    async editar(dados: IEditarCategoria) {
        const categoria = await this.repositorio.findOneOrFail({
            where: {
                id: dados.id
            }
        })
        categoria!.nome = dados.nome
        return this.repositorio.save(categoria)
    }

    async excluir(id: number) {
        return this.repositorio.softDelete(id)
    }
}
export { ModelCategoria }