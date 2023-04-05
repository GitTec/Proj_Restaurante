import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Venda } from "../venda/entidade";
import { Itens } from "../itens/entidade";

@Entity('tb_produto_venda')
class VendaProduto {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "id_venda" })
    idVenda: number

    @Column({ name: "id_produto" })
    idProduto: number

    @Column()
    quantidade: number

    @Column()
    preco: number

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date

    @ManyToOne(() => Venda, vnd => vnd.produtos)
    @JoinColumn({ name: 'id_venda' })
    venda: Venda

    @ManyToOne(() => Itens, prd => prd.venda)
    @JoinColumn({ name: 'id_produto' })
    produto: Itens
}

export { VendaProduto }