import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Itens } from "../itens/entidade";

@Entity("tb_categorias")
class Categoria {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @CreateDateColumn({ name: "created_at" })
    createAt: Date

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date

    @OneToMany(() => Itens, it=>it.categoria)//uma CATEGORIA tem muitos ITENS
    @JoinColumn({name:"id"})
    itens:Itens[]
}
export { Categoria }