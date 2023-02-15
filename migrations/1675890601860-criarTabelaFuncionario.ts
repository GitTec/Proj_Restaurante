import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criarTabelaFuncionario1675890601860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_funcionarios",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "45",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "45",
                    isNullable: false,
                },
                {
                    name: "cpf",
                    type: "varchar",
                    length: "11",
                    isNullable: false,
                },
                {
                    name: "dt_nascimento",
                    type: "date",
                    isNullable: false,
                },
                {
                    name: "telefone",
                    type: "varchar",
                    length: "11",
                    isNullable: false,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_funcionarios")
    }

}
