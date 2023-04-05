import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../categoria/entidade";
import { VendaProduto } from "../venda_produto/entidade";

@Entity("tb_itens")
class Itens {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    valor: number

    @Column()
    detalhes: string

    @Column()
    imagem: string

    @Column({ name: "id_categoria" })
    idCategoria: number

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date

    @ManyToOne(() => Categoria, cat => cat.itens)//Muitos ITENS para uma CATEGORIA
    @JoinColumn({ name: "id_categoria" })
    categoria: Categoria

    @OneToMany(() => VendaProduto, vndprd => vndprd.venda)
    @JoinColumn({ name: "id" })
    venda: VendaProduto[]
}
export { Itens }