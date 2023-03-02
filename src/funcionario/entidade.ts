import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_funcionarios")
class Funcionario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column({ name: "dt_nascimento" })
    dtNascimento: Date

    @Column()
    telefone: string

    @Column()
    senha?: string

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date
}

export { Funcionario }