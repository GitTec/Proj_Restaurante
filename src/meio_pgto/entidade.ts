import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("tb_meio_de_pagamento")
class Meio_Pagamento {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tipo_pagamento: number

    @Column()
    valor_acrescimos: number

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date
}

export { Meio_Pagamento }