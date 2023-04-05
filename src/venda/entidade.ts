import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Meio_Pagamento } from "../meio_pgto/entidade"
import { VendaProduto } from "../venda_produto/entidade";

@Entity("tb_vendas")
class Venda {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "nome_cliente" })
    nomeCliente: string

    @Column({ name: "telefone_cliente" })
    telefone: string

    @Column()
    endereco: string

    @Column({ name: "id_tipo_pagamento" })
    idTipoPagamento: number

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date

    @OneToOne(() => Meio_Pagamento, pgto => pgto.id)
    @JoinColumn({ name: "id_tipo_pagamento" })
    tipoPagamento: Meio_Pagamento

    @OneToMany(() => VendaProduto, vndprd => vndprd.venda)
    @JoinColumn({ name: "id" })
    produtos: VendaProduto[]
}

export { Venda }