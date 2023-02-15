import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criarTabelaMeioDePagamento1675969749027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_meio_de_pagamento",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: "tipo_pagamento",
                    type: "varchar",
                    length: "20",
                    isNullable: false
                },
                {
                    name: "valor_acrescimos",
                    type: "decimal(4,2)",
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_meio_de_pagamento")
    }

}
