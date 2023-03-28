import { AppDataSource } from "../../typeorm.config"
import { Meio_Pagamento } from "./entidade"
import { ICadastrarModeloPagamento, IEditarModeloPagamento } from "./interface"

class ModelMeioPagamento {
    private repositorio = AppDataSource.getRepository(Meio_Pagamento)

    async listar() {
        return this.repositorio.find({
        })
    }

    async buscarPorId(id: number) {
        return this.repositorio.findOne({
            where: {
                id
            }
        })
    }

    async cadastrar(dados: ICadastrarModeloPagamento) {
        const { tipo_pagamento, valor_acrescimos } = dados
        const modelopagamento = this.repositorio.create({
            tipo_pagamento, valor_acrescimos
        })
        return this.repositorio.save(modelopagamento)
    }

    async editar(dados: IEditarModeloPagamento) {
        const modelopagamento = await this.repositorio.findOneOrFail({
            where: {
                id: dados.id
            }
        })
        modelopagamento!.tipo_pagamento = dados.tipo_pagamento
        modelopagamento!.valor_acrescimos = dados.valor_acrescimos
        return this.repositorio.save(modelopagamento)
    }

    async excluir(id: number) {
        return this.repositorio.softDelete(id)
    }
}
export { ModelMeioPagamento }